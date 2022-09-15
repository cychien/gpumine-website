import { useTranslation } from 'react-i18next'

// import Announcement from '~/components/Announcement'
import CurrencyDropdown from '~/components/home/CurrencyDropdown'
import Stats from '~/components/home/Stats'
import Title from '~/components/Title'
// import useLocalStorage from '~/utils/hooks/useLocalStorage'

export default function Index() {
  const { t } = useTranslation()

  // const [announcements, setAnnouncements] = useLocalStorage(
  //   'announcements',
  //   { demo: false },
  //   { demo: true }
  // )

  return (
    <main className="flex flex-col items-center px-3 pt-4 pb-8 sm:pb-16">
      {/* {!!announcements?.demo && (
        <div className="w-full max-w-[964px]">
          <Announcement
            onClose={() => {
              setAnnouncements({ ...announcements, demo: false })
            }}
          />
        </div>
      )} */}

      <section className="mt-5 flex w-full max-w-[782px] flex-col space-y-4 sm:mt-12 sm:space-y-7">
        <div className="relative">
          <Title>{t('common.pool-stats')}</Title>
          <div className="absolute right-0 top-[-3px] hidden sm:block">
            <CurrencyDropdown />
          </div>
        </div>
        <Stats />
      </section>
    </main>
  )
}
