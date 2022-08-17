import i18n from "i18next";
import fsBackend from "i18next-fs-backend";
import { initReactI18next } from "react-i18next";

import { getLanguageFromSupported } from "./getLanguageFromSupported";
import {
  COMMON_OPTIONS,
  FALLBACK_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from "./constants";

export async function initI18nOnServer(request: Request) {
  /**
   * Create a new i18n instance whenever receiving request
   * since we don't want to misuse the old instance.
   */
  const i18nInstance = i18n.createInstance();

  const language = detectLanguageOnServer(request);
  const options = {
    ...COMMON_OPTIONS,
    lng: language,
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  };

  await i18nInstance.use(fsBackend).use(initReactI18next).init(options);

  return i18nInstance;
}

function detectLanguageOnServer(request: Request) {
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
