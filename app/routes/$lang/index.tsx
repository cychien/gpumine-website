import Announcement from '~/components/Announcement'
import useLocalStorage from '~/utils/hooks/useLocalStorage'

export default function Index() {
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
    </div>
  )
}
