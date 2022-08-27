import { useTranslation } from 'react-i18next'

import Announcement from '~/components/Announcement'
import Stats from '~/components/home/Stats'
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

      <section className="mt-5 flex w-full flex-col items-center space-y-4 sm:mt-12 sm:space-y-7">
        <h1 className="text-xl font-bold">{t('common.pool-stats')}</h1>
        <Stats />
      </section>
    </div>
  )
}
