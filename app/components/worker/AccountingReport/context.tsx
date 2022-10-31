import * as React from 'react'

import type { AccountingSortBy, AccountingType } from './type'

type Settings = {
  filters: {
    type: AccountingType
    sort: {
      by: AccountingSortBy | null
      direction: 'asc' | 'desc'
    }
  }
  page: number
  limit: number
}

type Context = {
  settings: Settings
  setSettings: React.Dispatch<React.SetStateAction<Settings>>
}

type ProviderProps = {
  children: React.ReactNode
}

const AccountingReportContext = React.createContext({} as Context)

function AccountingReportContextProvider({ children }: ProviderProps) {
  const [settings, setSettings] = React.useState<Settings>({
    filters: {
      type: 'accounting',
      sort: {
        by: null,
        direction: 'desc',
      },
    },
    page: 1,
    limit: 10,
  })

  return (
    <AccountingReportContext.Provider value={{ settings, setSettings }}>
      {children}
    </AccountingReportContext.Provider>
  )
}

function useAccountingReportContext() {
  const context = React.useContext(AccountingReportContext)

  if (context === undefined) {
    throw new Error(
      'useAccountingReportContext must be used within a AccountingReportContextProvider'
    )
  }

  return context
}

export { AccountingReportContextProvider, useAccountingReportContext }
