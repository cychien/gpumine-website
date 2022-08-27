import { FALLBACK_CURRENCY, SUPPORTED_CURRENCIES } from './constants'

export function getFromSupported(str: string | null) {
  if (
    str &&
    SUPPORTED_CURRENCIES.find((currency) => currency === str.toUpperCase())
  )
    return str.toUpperCase() as typeof SUPPORTED_CURRENCIES[number]
  return FALLBACK_CURRENCY
}
