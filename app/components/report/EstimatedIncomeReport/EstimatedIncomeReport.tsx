import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import reportIcons from '~/assets/icons/report-sprite.svg'
import logoUrl from '~/assets/images/logo.svg'
import { Report, ReportContent } from '~/components/report/Report'

function EstimatedIncomeReport() {
  const { t } = useTranslation()

  return (
    <Report className="mx-auto w-full max-w-[782px]">
      <ReportContent>
        <div className="flex items-center justify-between">
          <h2 className="flex items-center text-[#3569F5]">
            <svg className="h-[30px] w-[30px] flex-none">
              <use href={`${reportIcons}#estimated-income`} />
            </svg>
            <span className="ml-1 text-xl font-bold">
              {t('common.estimated-income')}
            </span>
          </h2>
          <div className="flex items-center">
            <div className="flex items-center text-primary-800">
              <svg className="h-6 w-6 flex-none">
                <use href={`${commonIcons}#clock`} />
              </svg>
              <span className="ml-1 text-sm">
                {t('common.24h-average-computing-power')}
              </span>
            </div>
            <div className="ml-5 text-xl font-bold text-primary-800">
              240.98G
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex space-x-5 px-10">
            <div className="flex-1">
              <Board header={t('common.one-day')} eth={0.001234} usd={240.42} />
            </div>
            <div className="flex-1">
              <Board header={t('common.one-week')} eth={10.0012} usd={400.42} />
            </div>
            <div className="flex-1">
              <Board
                header={t('common.one-month')}
                eth={200.012}
                usd={1200.42}
              />
            </div>
          </div>
        </div>

        <div className="mt-7">
          <img
            src={logoUrl}
            alt="GPUMINE Logo"
            width={130}
            height={20}
            className="mx-auto mb-2"
          />
        </div>
      </ReportContent>
    </Report>
  )
}

type BoardProps = {
  header: string
  eth: number
  usd: number
}

function Board({ header, eth, usd }: BoardProps) {
  return (
    <div className="overflow-hidden rounded-lg border-[1.5px] border-primary-500">
      <div className="bg-primary-500 py-2 text-center text-xl font-bold text-white">
        {header}
      </div>
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-500">{eth}</span>
          <span className="text-sm text-lightGray">ETH</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-darkGray">{usd}</span>
          <span className="text-sm text-lightGray">USD</span>
        </div>
      </div>
    </div>
  )
}

export default EstimatedIncomeReport
