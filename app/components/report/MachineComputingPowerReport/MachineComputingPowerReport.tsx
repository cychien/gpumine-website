import { useTranslation } from 'react-i18next'
import { ClientOnly } from 'remix-utils'

import computingPowerIcon from '~/assets/icons/computing-power.svg'

import { ReportContent } from '../Report'
import MachinceComputingPowerChart from './MachinceComputingPowerChart.client'

function MachineComputingPowerReport() {
  const { t } = useTranslation()

  return (
    <ReportContent>
      <div className="flex items-center space-x-2">
        <img
          src={computingPowerIcon}
          height={30}
          width={30}
          className="h-[30px] w-[30px]"
          alt=""
        />
        <div className="flex">
          <div className="font-bold text-primary-500">
            {t('common.machine-computing-power-chart')}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <ClientOnly fallback={<div className="h-[250px]" />}>
          {() => <MachinceComputingPowerChart />}
        </ClientOnly>
      </div>
    </ReportContent>
  )
}

export default MachineComputingPowerReport
