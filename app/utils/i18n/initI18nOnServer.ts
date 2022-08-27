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

export async function initI18nOnServer(request: Request) {
  /**
   * Create a new i18n instance whenever receiving request
   * since we don't want to misuse the old instance.
   */
  const i18nInstance = i18n.createInstance()

  const language = detectLanguageOnServer(request)

  const options = {
    ...COMMON_OPTIONS,
    lng: language,
    backend: {
      loadPath: (lngs: string[]) => {
        const firstLanguage = lngs[0] as SupportedLanguage
        const translationFilePath = TRANSLATION_FILE_PATHS[firstLanguage]
        return `${TRANSLATION_URL}/${translationFilePath}/content.json`
      },
    },
  }

  await i18nInstance.use(httpBackend).use(initReactI18next).init(options)

  return i18nInstance
}

export function detectLanguageOnServer(request: Request) {
  // Priorities: search params(lng) -> path params(/{{lng}}/) -> cookies(i18next) -> header(accept-language)
  const url = new URL(request.url)

  // Search params
  const serachParamLng = url.searchParams.get('lng')
  if (serachParamLng) {
    return getLanguageFromSupported(serachParamLng)
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
  const cookies = Object.fromEntries(
    request.headers
      .get('Cookie')
      ?.split(';')
      .map((cookie) => cookie.trim())
      .map((cookie) => cookie.split('=')) ?? []
  )
  const cookieLng = cookies.i18next
  if (cookieLng) {
    return getLanguageFromSupported(cookieLng)
  }

  // Header: accept-language
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    return getLanguageFromSupported(acceptLanguage)
  }

  return FALLBACK_LANGUAGE
}
