import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import Announcement from '~/components/Announcement'
import useLocalStorage from '~/utils/hooks/useLocalStorage'

export default function Index() {
  const { t } = useTranslation()

  const [announcements, setAnnouncements] = useLocalStorage(
    'announcements',
    { demo: false },
    { demo: true }
  )

  return (
    <div className="flex flex-col items-center px-3 py-4">
      {!!announcements?.demo && (
        <div className="w-full max-w-[964px]">
          <Announcement
            onClose={() => {
              setAnnouncements({ ...announcements, demo: false })
            }}
          />
        </div>
      )}

      <div className="mt-5 flex w-full max-w-[782px] flex-col items-center space-y-4 sm:mt-12 sm:space-y-7">
        <h1 className="text-xl font-bold">{t('common.pool-stats')}</h1>
        <div className="bg-surface self-stretch rounded-2xl px-6 py-4 shadow-[0_4px_8px_0_rgba(189,206,252,0.2)] sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center text-primary-500 sm:flex-row">
              <svg className="h-[36px] w-[36px] sm:h-[60px] sm:w-[60px]">
                <use href={`${commonIcons}#eth`} />
              </svg>
              <div className="mt-[-4px] text-sm font-bold sm:mt-0 sm:text-xl">
                ETH
              </div>
            </div>
            <div className="flex flex-1 justify-center space-x-6 sm:items-start sm:space-x-16">
              <div className="hidden flex-col items-center sm:flex">
                <div className="mb-1 text-xs text-lightGray">
                  {t('common.whole-computing-power')}
                </div>
                <div className="font-bold text-primary-500 sm:text-xl">
                  1200
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-1 hidden text-xs text-lightGray sm:block">
                  {t('common.pool-computing-power')}
                </div>
                <div className="mb-1 text-sm font-bold text-darkGray sm:text-xl">
                  1.58
                </div>
                <div className="text-xs text-lightGray">TH</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-1 hidden text-xs text-lightGray sm:block">
                  {t('common.daily-earning')}
                </div>
                <div className="mb-1 text-sm font-bold text-darkGray sm:text-xl">
                  0.00746
                </div>
                <div className="text-xs text-lightGray">100MH</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-1 hidden text-xs text-lightGray sm:block">
                  USD
                </div>
                <div className="text-sm font-bold text-darkGray sm:text-xl">
                  2.238
                </div>
                <div className="text-xs text-lightGray">USD</div>
              </div>
            </div>
            <button type="button" className="p-2">
              <svg className="h-[10px] w-[20px] text-lightGray sm:h-[12px] sm:w-[24px]">
                <use href={`${commonIcons}#arrow-down`} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
