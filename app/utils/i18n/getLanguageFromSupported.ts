import parser from 'accept-language-parser'

import { FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from './constants'

export function getLanguageFromSupported(language: string) {
  return (
    parser.pick(SUPPORTED_LANGUAGES, language, {
      loose: true,
    }) ?? FALLBACK_LANGUAGE
  )
}
