import { useTranslation } from 'react-i18next'

import paidBalanceIcon from '~/assets/icons/stats/paid-balance.svg'

import { ReportContent } from '../Report'

function PaidBalanceReport() {
  const { t } = useTranslation()

  return (
    <ReportContent className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img
          src={paidBalanceIcon}
          height={30}
          width={30}
          className="h-[30px] w-[30px]"
          alt=""
        />
        <div className="flex">
          <div className="font-bold text-primary-500">
            {t('common.paid-balance')}
          </div>
        </div>
      </div>
      <div className="font-bold text-darkGray">148.024 ETH</div>
    </ReportContent>
  )
}

export default PaidBalanceReport
