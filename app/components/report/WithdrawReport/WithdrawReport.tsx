import { useTranslation } from 'react-i18next'
import { ClientOnly } from 'remix-utils'

import commonIcons from '~/assets/icons/common.svg'
import { Report, ReportContent, ReportTitle } from '~/components/report/Report'

import WithdrawChart from './WithdrawChart.client'

function WithdrawReport() {
  const { t } = useTranslation()

  return (
    <Report>
      <ReportTitle>{t('report.last-30d-withdraw-records')}</ReportTitle>
      <ReportContent className="mt-5">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center divide-x divide-primary-200">
            <div className="flex items-center pr-2 text-[#3569F5]">
              <svg className="h-[30px] w-[30px] flex-none">
                <use href={`${commonIcons}#eth`} />
              </svg>
              <span className="ml-1 font-bold">
                {t('common.eth-total-withdraw')}
              </span>
            </div>
            <div className="pl-2 font-bold text-darkGray">22k.423532</div>
          </div>
          <div className="flex items-center divide-x divide-primary-200">
            <div className="flex items-center pr-2 text-[#3569F5]">
              <span className="ml-1 font-bold">{t('common.service-fee')}</span>
            </div>
            <div className="pl-2 font-bold text-darkGray">12k.204942</div>
          </div>
        </div>

        <div className="mt-8">
          <ClientOnly fallback={<div className="h-[250px]" />}>
            {() => <WithdrawChart />}
          </ClientOnly>
        </div>
      </ReportContent>
    </Report>
  )
}

export default WithdrawReport
