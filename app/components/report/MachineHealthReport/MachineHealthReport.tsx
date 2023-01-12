import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import machineHealthIcon from '~/assets/icons/machine-health.svg'
import Tooltip from '~/components/Tooltip'

import { ReportContent } from '../Report'

function MachineHealthReport() {
  const { t } = useTranslation()

  return (
    <ReportContent>
      <div className="flex items-center space-x-2">
        <img
          src={machineHealthIcon}
          width={30}
          height={30}
          className="h-[30px] w-[30px]"
          alt=""
        />
        <div className="flex items-center space-x-1">
          <div className="font-bold text-primary-500">
            {t('common.machine-health-value')}
          </div>
          <svg
            className="h-5 w-5 text-primary-500"
            data-for="machine-health-value-description"
            data-tip={t('common.machine-health-value-description')}
          >
            <use href={`${commonIcons}#help`} />
          </svg>
          <Tooltip id="machine-health-value-description" />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex">
          <div className="flex flex-1 items-center justify-center text-2xl font-bold">
            98%
          </div>
          <div className="flex w-[132px] flex-col space-y-2">
            <div className="flex w-full flex-col items-center space-y-1 rounded-xl border border-orange px-4 py-2">
              <div className="text-xs text-lightGray">
                24hr {t('common.average-computing-power')}
              </div>
              <div className="text-xl font-bold text-orange">80.00 G</div>
            </div>
            <div className="flex w-full flex-col items-center space-y-1 rounded-xl border border-green px-4 py-2">
              <div className="text-xs text-lightGray">
                {t('common.local-computing-power')}
              </div>
              <div className="text-xl font-bold text-green">12.34 G</div>
            </div>
          </div>
        </div>
      </div>
    </ReportContent>
  )
}

export default MachineHealthReport
