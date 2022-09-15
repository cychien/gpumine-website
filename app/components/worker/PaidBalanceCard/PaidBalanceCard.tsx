import { useTranslation } from 'react-i18next'

import paidBalanceIcon from '~/assets/icons/stats/paid-balance.svg'
import StatsCard from '~/components/StatsCard'

function PaidBalanceCard() {
  const { t } = useTranslation()

  return (
    <StatsCard>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={paidBalanceIcon}
            alt="Paid balance icon"
            className="h-[30px] w-[30px]"
          />
          <div className="flex">
            <div className="font-bold text-primary-500">
              {t('common.paid-balance')}
            </div>
          </div>
        </div>
        <div className="font-bold text-darkGray">148.024 ETH</div>
      </div>
    </StatsCard>
  )
}

export default PaidBalanceCard
