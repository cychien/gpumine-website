import type { InitOptions } from 'i18next'

export const FALLBACK_LANGUAGE = 'en-US'
export const SUPPORTED_LANGUAGES = ['en-US', 'zh-TW']

export const COMMON_OPTIONS: InitOptions = {
  fallbackLng: FALLBACK_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  // React already safes from xss
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
}

export const TRANSLATION_FILE_PATHS = {
  'en-US': 'en-US',
  'zh-TW': 'zh-Hant-TW',
}
