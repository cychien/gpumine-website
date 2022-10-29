import produce from 'immer'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import SegmentedControl from '~/components/SegmentedControl'
import StatsCard from '~/components/StatsCard'

import {
  useWorkerListReportContext,
  WorkerListReportContextProvider,
} from './context'
import DesktopTable from './DesktopTable'
import MobileTable from './MobileTable'
import Pagination from './Pagination'
import type { WorkerStatus } from './type'

function WorkerListReport() {
  return (
    <WorkerListReportContextProvider>
      <section className="flex flex-col space-y-5">
        <Title />
        <StatsCard>
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="flex space-x-8">
              <StatusControl />
              <WorkerStatusExplanation />
            </div>
            <WorkerIdSearchInput />
          </div>

          <div className="mt-7">
            <div className="hidden lg:block">
              <DesktopTable />
            </div>
            <div className="lg:hidden">
              <MobileTable />
            </div>
          </div>
        </StatsCard>
        <Pagination />
      </section>
    </WorkerListReportContextProvider>
  )
}

function Title() {
  const { t } = useTranslation()

  return (
    <div className="self-start sm:self-auto">
      <h2 className="text-center text-xl font-bold">
        {t('common.machine-info')}
      </h2>
    </div>
  )
}

function StatusControl() {
  const { settings, setSettings } = useWorkerListReportContext()
  const { t } = useTranslation()

  const statusOptions: Array<{ label: string; value: WorkerStatus }> = [
    { label: t('common.all'), value: 'all' },
    { label: t('common.online'), value: 'online' },
    { label: t('common.offline'), value: 'offline' },
  ]

  return (
    <SegmentedControl
      options={statusOptions}
      value={settings.filters.status}
      onChange={(newValue) => {
        setSettings(
          produce(settings, (draft) => {
            // @ts-ignore
            draft.filters.status = newValue
            draft.page = 1
          })
        )
      }}
    />
  )
}

function WorkerStatusExplanation() {
  const { t } = useTranslation()

  return (
    <div className="flex space-x-6">
      <div className="flex items-center space-x-1.5">
        <div className="h-[10px] w-[10px] rounded-full bg-primary-600" />
        <span className="text-sm font-medium text-primary-600">
          {t('common.online')}
        </span>
      </div>
      <div className="flex items-center space-x-1.5">
        <div className="h-[10px] w-[10px] rounded-full bg-red" />
        <span className="text-sm font-medium text-red">
          {t('common.offline')}
        </span>
      </div>
    </div>
  )
}

function WorkerIdSearchInput() {
  const { settings, setSettings } = useWorkerListReportContext()
  const { t } = useTranslation()

  const [query, setQuery] = React.useState('')

  return (
    <div className="flex h-[32px] min-w-[200px] justify-between overflow-hidden rounded-lg border border-primary-300 bg-white px-3">
      <input
        className="text-sm placeholder-primary-200 shadow-none outline-none"
        placeholder={t('common.searchByID')}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />
      <button
        aria-label="Search by worker ID"
        className="flex items-center text-primary-500"
        type="button"
        onClick={() => {
          setSettings(
            produce(settings, (draft) => {
              // @ts-ignore
              draft.filters.query = query
              draft.page = 1
            })
          )
        }}
      >
        <svg className="h-[16px] w-[16px]">
          <use href={`${commonIcons}#search`} />
        </svg>
      </button>
    </div>
  )
}

export default WorkerListReport
