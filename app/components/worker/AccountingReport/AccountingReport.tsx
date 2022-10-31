import produce from 'immer'
import { useTranslation } from 'react-i18next'

import SegmentedControl from '~/components/SegmentedControl'
import StatsCard from '~/components/StatsCard'

import {
  AccountingReportContextProvider,
  useAccountingReportContext,
} from './context'
import DesktopTable from './DesktopTable'
import MobileTable from './MobileTable'
import Pagination from './Pagination'
import type { AccountingType } from './type'

function AccountingReport() {
  return (
    <AccountingReportContextProvider>
      <section className="flex flex-col space-y-5">
        <Title />
        <StatsCard>
          <div className="flex space-x-8">
            <TypeControl />
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
    </AccountingReportContextProvider>
  )
}

function Title() {
  const { t } = useTranslation()

  return (
    <div className="self-start sm:self-auto">
      <h2 className="text-center text-xl font-bold">
        {t('common.accounting-info')}
      </h2>
    </div>
  )
}

function TypeControl() {
  const { settings, setSettings } = useAccountingReportContext()
  const { t } = useTranslation()

  const typeOptions: Array<{ label: string; value: AccountingType }> = [
    { label: t('common.accounting'), value: 'accounting' },
    { label: t('common.system-internal-transfer'), value: 'system' },
  ]

  return (
    <SegmentedControl
      options={typeOptions}
      value={settings.filters.type}
      onChange={(newValue) => {
        setSettings(
          produce(settings, (draft) => {
            // @ts-ignore
            draft.filters.type = newValue
            draft.page = 1
          })
        )
      }}
    />
  )
}

export default AccountingReport
