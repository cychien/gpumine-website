import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import httpBackend from "i18next-http-backend";
import fsBackend from "i18next-fs-backend";

import { getLanguageFromSupported } from "./getLanguageFromSupported";
import {
  COMMON_OPTIONS,
  FALLBACK_LANGUAGE,
  SUPPORTED_LANGUAGES,
  TRANSLATION_FILE_PATHS,
} from "./constants";
import { TRANSLATION_URL } from "~/constants/app";
import type { SupportedLanguage } from "./types";

export async function initI18nOnServer(request: Request) {
  /**
   * Create a new i18n instance whenever receiving request
   * since we don't want to misuse the old instance.
   */
  const i18nInstance = i18n.createInstance();
  const isDev = process.env.NODE_ENV === "development";

  const language = detectLanguageOnServer(request);
  const options = {
    ...COMMON_OPTIONS,
    lng: language,
    backend: {
      loadPath: (lngs: string[]) => {
        const firstLanguage = lngs[0] as SupportedLanguage;
        const translationFilePath = TRANSLATION_FILE_PATHS[firstLanguage];
        return isDev
          ? `./public/locales/${firstLanguage}/translation.json`
          : `${TRANSLATION_URL}/${translationFilePath}/translation.json`;
      },
    },
  };

  const backend = isDev ? fsBackend : httpBackend;

  await i18nInstance
    .use<fsBackend | httpBackend>(backend)
    .use(initReactI18next)
    .init(options);

  return i18nInstance;
}

export function detectLanguageOnServer(request: Request) {
  // Priorities: search params(lng) -> path params(/{{lng}}/) -> cookies(i18next) -> header(accept-language)
  const url = new URL(request.url);

  // Search params
  const lngSerachParam = url.searchParams.get("lng");
  if (lngSerachParam) {
    return getLanguageFromSupported(lngSerachParam);
  }

  // Path params
  const lngPathParam = url.pathname.split("/")[1];
  if (SUPPORTED_LANGUAGES.includes(lngPathParam)) {
    return getLanguageFromSupported(lngPathParam);
  }

  // Cookies
  const cookies = Object.fromEntries(
    request.headers
      .get("Cookie")
      ?.split(";")
      .map((cookie) => cookie.trim())
      .map((cookie) => cookie.split("=")) ?? []
  );
  const lngCookie = cookies.i18next;
  if (lngCookie) {
    return getLanguageFromSupported(lngCookie);
  }

  // Header: accept-language
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    return getLanguageFromSupported(acceptLanguage);
  }

  return FALLBACK_LANGUAGE;
}
