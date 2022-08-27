import { FALLBACK_CURRENCY } from './constants'
import { getFromSupported } from './utils'

function detectCurrencyOnClient() {
  // Priorities: search params(currency) -> cookies(currency)
  const url = new URL(window.location.href)

  // Search params
  const searchParamCurrency = url.searchParams.get('currency')
  if (searchParamCurrency) {
    return getFromSupported(searchParamCurrency)
  }

  // Cookies
  const cookieCurrency = getCookie('currency')
  if (cookieCurrency) {
    return getFromSupported(cookieCurrency)
  }

  return FALLBACK_CURRENCY
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

export { detectCurrencyOnClient }
