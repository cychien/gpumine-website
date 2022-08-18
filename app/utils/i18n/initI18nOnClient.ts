import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import httpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { COMMON_OPTIONS, TRANSLATION_FILE_PATHS } from "./constants";
import { TRANSLATION_URL } from "~/constants/app";
import type { SupportedLanguage } from "./types";

// The lookup rules should be aligned with `detectLanguageOnServer`
export async function initI18nOnClient() {
  const options = {
    ...COMMON_OPTIONS,
    backend: {
      loadPath: (lngs: string[]) => {
        const firstLanguage = lngs[0] as SupportedLanguage;
        const translationFilePath = TRANSLATION_FILE_PATHS[firstLanguage];
        return `${TRANSLATION_URL}/${translationFilePath}/translation.json`;
      },
    },
    detection: {
      // cache user language on
      caches: ["cookie"],
      order: ["querystring", "path", "cookie", "navigator"],
      lookupCookie: "i18next",
      lookupFromPathIndex: 0,
    },
  };

  /**
   * Rules for language codes matching:
   * https://github.com/i18next/i18next/blob/master/src/LanguageUtils.js#L71
   */
  await i18n
    .use(languageDetector)
    .use(httpBackend)
    .use(initReactI18next)
    .init(options);

  return i18n;
}
