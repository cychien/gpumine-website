import { useTranslation } from 'react-i18next'
import { ClientOnly } from 'remix-utils'

import StatsCard from '~/components/StatsCard'

import HistoryRevenueChart from './HistoryRevenueChart.client'

function HistoryRevenueReport() {
  return (
    <section className="flex flex-col space-y-5">
      <Title />
      <StatsCard>
        <ClientOnly fallback={<div className="h-[253px]" />}>
          {() => (
            <div>
              <HistoryRevenueChart />
            </div>
          )}
        </ClientOnly>
      </StatsCard>
    </section>
  )
}

function Title() {
  const { t } = useTranslation()

  return (
    <div className="self-start sm:self-auto">
      <h2 className="text-center text-xl font-bold">
        {t('common.24h-history-revenue')}
      </h2>
    </div>
  )
}

export default HistoryRevenueReport
