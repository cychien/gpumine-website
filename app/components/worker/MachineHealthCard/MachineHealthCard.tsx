import { useTranslation } from 'react-i18next'
import ReactTooltip from 'react-tooltip'
import { ClientOnly } from 'remix-utils'

import commonIcons from '~/assets/icons/common.svg'
import machineHealthIcon from '~/assets/icons/stats/machine-health.svg'
import StatsCard from '~/components/StatsCard'

function MachineHealthCard() {
  const { t } = useTranslation()

  return (
    <StatsCard>
      <div className="flex items-center space-x-3">
        <img
          src={machineHealthIcon}
          alt="Machine health icon"
          className="h-[30px] w-[30px]"
        />
        <div className="flex items-center space-x-1">
          <div className="font-bold text-primary-500">
            {t('common.machine-health-value')}
          </div>
          <svg
            className="h-[20px] w-[20px] text-primary-500"
            data-for="machine-health-value-description"
            data-tip={t('common.machine-health-value-description')}
          >
            <use href={`${commonIcons}#help`} />
          </svg>
          <ClientOnly>
            {() => (
              <ReactTooltip
                id="machine-health-value-description"
                className="!max-w-[266px] !rounded-lg !bg-primary-100 !p-2 !text-darkGray"
                border
                borderColor="#96B2FF"
                arrowColor="#DAE2F9"
                place="right"
                offset={{ right: 4 }}
                effect="solid"
              />
            )}
          </ClientOnly>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between space-x-6">
          <div className="flex flex-1 items-center justify-center text-2xl font-bold">
            98%
          </div>
          <div className="flex flex-col space-y-2">
            <div className="min-w-170px flex flex-col items-center space-y-1 rounded-xl border border-orange px-4 py-2">
              <div className="text-xs text-lightGray">
                6hr / 24hr {t('common.average-computing-power')}
              </div>
              <div className="text-xl font-bold text-orange">12.50/80.00</div>
            </div>
            <div className="min-w-170px flex flex-col items-center space-y-1 rounded-xl border border-green px-4 py-2">
              <div className="text-xs text-lightGray">
                {t('common.local-computing-power')}
              </div>
              <div className="text-xl font-bold text-green">12.34</div>
            </div>
          </div>
        </div>
      </div>
    </StatsCard>
  )
}

export default MachineHealthCard
