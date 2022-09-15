import { useTranslation } from 'react-i18next'

import miningMachineIcon from '~/assets/icons/stats/mining-machine.svg'
import StatsCard from '~/components/StatsCard'

function MachineStatusCard() {
  const { t } = useTranslation()

  return (
    <StatsCard>
      <div className="flex items-center space-x-3">
        <img
          src={miningMachineIcon}
          alt="Machine health icon"
          className="h-[30px] w-[30px]"
        />
        <div className="flex items-center space-x-1">
          <div className="font-bold text-primary-500">
            {t('common.machine-status')}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex h-[10px]">
          <div className="w-[70%] bg-gradient-to-r from-primary-300 to-primary-500" />
          <div className="flex-1 bg-gradient-to-r from-[#ED5D7D]/60 to-[#ED5D7D]" />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex space-x-3">
          <div className="flex flex-1 flex-col items-center rounded-xl border border-primary-500 py-2 px-3">
            <span className="text-xs text-lightGray">{t('common.online')}</span>
            <span className="text-xl font-bold text-primary-500">1200</span>
          </div>
          <div className="flex flex-1 flex-col items-center rounded-xl border border-red py-2 px-3">
            <span className="text-xs text-lightGray">
              {t('common.offline')}
            </span>
            <span className="text-xl font-bold text-red">0</span>
          </div>
        </div>
      </div>
    </StatsCard>
  )
}

export default MachineStatusCard
