import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import balanceIcon from '~/assets/icons/stats/balance.svg'
import StatsCard from '~/components/StatsCard'
import Tooltip from '~/components/Tooltip'

function BalanceCard() {
  const { t } = useTranslation()

  return (
    <StatsCard>
      <div className="flex items-center space-x-3">
        <img
          src={balanceIcon}
          alt="Balance icon"
          className="h-[30px] w-[30px]"
        />
        <div className="flex">
          <div className="font-bold text-primary-500">
            {t('common.balance')}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between space-x-1">
          <div className="flex items-center space-x-1">
            <div className="text-sm text-darkGray">
              {t('common.payout-progress')}
            </div>
            <svg
              className="h-[16px] w-[16px] text-darkGray"
              data-for="payout-description"
              data-tip={t('common.payout-description')}
            >
              <use href={`${commonIcons}#help`} />
            </svg>
            <Tooltip id="payout-description" />
          </div>
          <div className="text-xs text-lightGray">0.1 ETH</div>
        </div>
        <div className="relative mt-2 overflow-hidden">
          <div className="h-[10px] rounded-full bg-primary-200" />
          <div className="absolute top-0 left-0 h-full w-[80%] rounded-full bg-primary-500" />
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <div className="font-bold text-primary-500">0.08123 ETH</div>
            <div className="text-xs text-lightGray">4.14K USD</div>
          </div>
        </div>
      </div>
    </StatsCard>
  )
}

export default BalanceCard
