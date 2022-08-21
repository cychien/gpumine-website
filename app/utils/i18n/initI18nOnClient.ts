import parser from 'accept-language-parser'
import i18n from 'i18next'
import httpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { TRANSLATION_URL } from '~/constants/app'
import type { SupportedLanguage } from '~/types/i18n'

import {
  COMMON_OPTIONS,
  FALLBACK_LANGUAGE,
  SUPPORTED_LANGUAGES,
  TRANSLATION_FILE_PATHS,
} from './constants'
import { getLanguageFromSupported } from './getLanguageFromSupported'

export async function initI18nOnClient() {
  const language = detectLanguageOnClient()

  cacheUserLanguage(language)

  const options = {
    ...COMMON_OPTIONS,
    lng: language,
    backend: {
      loadPath: (lngs: string[]) => {
        const firstLanguage = lngs[0] as SupportedLanguage
        const translationFilePath = TRANSLATION_FILE_PATHS[firstLanguage]
        return `${TRANSLATION_URL}/${translationFilePath}/translation.json`
      },
    },
  }

  /**
   * Rules for language codes matching:
   * https://github.com/i18next/i18next/blob/master/src/LanguageUtils.js#L71
   */
  await i18n.use(httpBackend).use(initReactI18next).init(options)

  return i18n
}

// The lookup rules should be aligned with `detectLanguageOnServer`
export function detectLanguageOnClient() {
  // Priorities: search params(lng) -> path params(/{{lng}}/) -> cookies(i18next) -> header(accept-language)
  const url = new URL(window.location.href)

  // Search params
  const searchParamLng = url.searchParams.get('lng')
  if (searchParamLng) {
    return getLanguageFromSupported(searchParamLng)
  }

  // Path params
  const pathParamLng = url.pathname.split('/')[1]
  const parsedLanguage = parser.pick(SUPPORTED_LANGUAGES, pathParamLng, {
    loose: true,
  })
  if (parsedLanguage) {
    return parsedLanguage
  }

  // Cookies
  const cookieLng = getCookie('i18next')
  if (cookieLng) {
    return getLanguageFromSupported(cookieLng)
  }

  const navigatorLng = getLanguageFromNavigator()
  if (navigatorLng) {
    return getLanguageFromSupported(navigatorLng)
  }

  return FALLBACK_LANGUAGE
}

function getCookie(name: string) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return undefined
}

function getLanguageFromNavigator() {
  if (typeof navigator === 'undefined') return undefined

  if (navigator.languages) {
    // Chrome only; not an array, so can't use .push.apply instead of iterating
    return navigator.languages[0]
  }

  // For IE
  // @ts-ignore
  if (navigator.userLanguage) {
    // @ts-ignore
    return navigator.userLanguage
  }

  if (navigator.language) {
    return navigator.language
  }
}

function setCookie(name: string, value: string) {
  document.cookie = name + '=' + (value || '') + '; path=/'
}

function cacheUserLanguage(language: string) {
  setCookie('i18next', language)
}
