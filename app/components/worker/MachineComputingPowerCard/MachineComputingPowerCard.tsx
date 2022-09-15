import { useTranslation } from 'react-i18next'
import { ClientOnly } from 'remix-utils'

import computingPowerIcon from '~/assets/icons/stats/computing-power.svg'
import StatsCard from '~/components/StatsCard'

import MachinceComputingPowerChart from './MachinceComputingPowerChart.client'

function MachineComputingPowerCard() {
  const { t } = useTranslation()

  return (
    <StatsCard>
      <div className="flex items-center space-x-2">
        <img
          src={computingPowerIcon}
          alt="Balance icon"
          className="h-[30px] w-[30px]"
        />
        <div className="flex">
          <div className="font-bold text-primary-500">
            {t('common.machine-computing-power-chart')}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <ClientOnly fallback={<div className="h-[253px]" />}>
          {() => (
            <div>
              <MachinceComputingPowerChart />
            </div>
          )}
        </ClientOnly>
      </div>
    </StatsCard>
  )
}

export default MachineComputingPowerCard
