import { FALLBACK_CURRENCY } from './constants'
import { getFromSupported } from './utils'

function detectCurrencyOnServer(request: Request) {
  // Priorities: search params(currency) -> cookies(currency)
  const url = new URL(request.url)
  if (url.searchParams.has('currency')) {
    return getFromSupported(url.searchParams.get('currency'))
  }

  const cookies = Object.fromEntries(
    request.headers
      .get('Cookie')
      ?.split(';')
      .map((cookie) => cookie.trim())
      .map((cookie) => cookie.split('=')) ?? []
  ) as { currency?: string }

  if (cookies['currency']) {
    return getFromSupported(cookies['currency'])
  }

  return FALLBACK_CURRENCY
}

export { detectCurrencyOnServer }
