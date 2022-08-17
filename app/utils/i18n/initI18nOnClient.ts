import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import httpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { COMMON_OPTIONS } from "./constants";

// The lookup rules should be aligned with `detectLanguageOnServer`
export async function initI18nOnClient() {
  const options = {
    ...COMMON_OPTIONS,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
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
