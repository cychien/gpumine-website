import * as React from 'react'

import type { WorkerSortBy, WorkerStatus } from './type'

type Settings = {
  filters: {
    status: WorkerStatus
    query: string
    sort: {
      by: WorkerSortBy | null
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

const WorkerListReportContext = React.createContext({} as Context)

function WorkerListReportContextProvider({ children }: ProviderProps) {
  const [settings, setSettings] = React.useState<Settings>({
    filters: {
      status: 'all',
      query: '',
      sort: {
        by: null,
        direction: 'desc',
      },
    },
    page: 1,
    limit: 10,
  })

  return (
    <WorkerListReportContext.Provider value={{ settings, setSettings }}>
      {children}
    </WorkerListReportContext.Provider>
  )
}

function useWorkerListReportContext() {
  const context = React.useContext(WorkerListReportContext)

  if (context === undefined) {
    throw new Error(
      'useWorkerListReportContext must be used within a WorkerListReportContextProvider'
    )
  }

  return context
}

export { useWorkerListReportContext, WorkerListReportContextProvider }
