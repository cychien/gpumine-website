import { RemixBrowser } from '@remix-run/react'
import { hydrateRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'

import { CurrencyProvider } from './utils/currency/CurrencyProvider'
import { detectCurrencyOnClient } from './utils/currency/detectCurrencyOnClient'
import { initI18nOnClient } from './utils/i18n'
;(async function () {
  const i18nInstance = await initI18nOnClient()
  const currency = detectCurrencyOnClient()

  hydrateRoot(
    document,
    <I18nextProvider i18n={i18nInstance}>
      <CurrencyProvider currency={currency}>
        <RemixBrowser />
      </CurrencyProvider>
    </I18nextProvider>
  )
})()
