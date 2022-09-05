import useCollapse from 'react-collapsed'
import { useTranslation } from 'react-i18next'
import { ClientOnly } from 'remix-utils'

import commonIcons from '~/assets/icons/common.svg'

import ComputingPowerChart from './ComputingPowerChart.client'

export default function Stats() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: true,
  })

  return (
    <div className="bg-surface rounded-2xl shadow-[0_4px_8px_0_rgba(189,206,252,0.2)]">
      <div className="flex items-center justify-between px-6 py-5">
        <CurrencyType />

        <div className="flex-1">
          <StatsNumbers />
        </div>

        <button className="p-2" {...getToggleProps()}>
          <svg className="h-[10px] w-[20px] text-lightGray sm:h-[12px] sm:w-[24px]">
            {isExpanded ? (
              <use href={`${commonIcons}#arrow-up`} />
            ) : (
              <use href={`${commonIcons}#arrow-down`} />
            )}
          </svg>
        </button>
      </div>

      <div {...getCollapseProps()}>
        <ClientOnly fallback={<div className="h-[300px]" />}>
          {() => (
            <div className="pl-4 pr-0 pb-5 sm:pl-6 sm:pr-2">
              <ComputingPowerChart />
            </div>
          )}
        </ClientOnly>
      </div>
    </div>
  )
}

function CurrencyType() {
  return (
    <div className="flex flex-col items-center text-primary-500 sm:flex-row">
      <svg className="h-[36px] w-[36px] sm:h-[48px] sm:w-[48px]">
        <use href={`${commonIcons}#eth`} />
      </svg>
      <div className="mt-[-4px] text-sm font-bold sm:mt-0 sm:text-xl">ETH</div>
    </div>
  )
}

function StatsNumbers() {
  const { t } = useTranslation()

  return (
    <div className="flex justify-center sm:items-start sm:space-x-16">
      <div className="hidden flex-col items-center sm:flex">
        <div className="mb-1 text-xs text-lightGray">
          {t('common.whole-computing-power')}
        </div>
        <div className="font-bold text-primary-500 sm:text-xl">1200</div>
      </div>

      <div className="flex items-center space-x-6 sm:space-x-16">
        <div className="flex flex-col items-center">
          <div className="mb-1 text-xs text-lightGray">
            {t('common.pool-computing-power')}
          </div>
          <div className="mb-1 text-sm font-bold text-darkGray sm:text-xl">
            1.58
          </div>
          <div className="text-xs text-lightGray">TH</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-1 text-xs text-lightGray">
            {t('common.daily-earning')}
          </div>
          <div className="mb-1 text-sm font-bold text-darkGray sm:text-xl">
            0.00746
          </div>
          <div className="text-xs text-lightGray">100MH</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-1 text-xs text-lightGray">USD</div>
          <div className="mb-1 text-sm font-bold text-darkGray sm:text-xl">
            2.238
          </div>
          <div className="text-xs text-lightGray">USD</div>
        </div>
      </div>
    </div>
  )
}
