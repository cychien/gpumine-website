import type { ReactNode } from 'react'
import { useCallback } from 'react'
import { useContext } from 'react'
import { createContext, useState } from 'react'

import type { CurrencyType } from '~/types/currency'

type ContextType = {
  currency: CurrencyType
  setCurrency: (currency: CurrencyType) => void
}

const CurrencyContext = createContext<ContextType>({} as ContextType)

type CurrencyProviderProps = {
  currency: CurrencyType
  children: ReactNode
}

function CurrencyProvider({
  currency: currencyProp,
  children,
}: CurrencyProviderProps) {
  const [currency, setCurrency] = useState<CurrencyType>(currencyProp || 'USD')

  const set = useCallback((currency: CurrencyType) => {
    setCookie('currency', currency)
    setCurrency(currency)
  }, [])

  const value = { currency, setCurrency: set }

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}

function setCookie(name: string, value: string) {
  document.cookie = name + '=' + (value || '') + '; path=/'
}

export { CurrencyProvider, useCurrency }
