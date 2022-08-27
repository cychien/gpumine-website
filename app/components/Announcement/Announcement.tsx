import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'

type AnnouncementProps = {
  onClose: () => void
}

export default function Announcement({ onClose }: AnnouncementProps) {
  const { t } = useTranslation()

  return (
    <div className="flex items-center space-x-4 rounded-lg bg-primary-500 p-5">
      <div className="flex flex-1 items-center space-x-4">
        <div className="flex items-center justify-center rounded bg-white py-[2px] px-[10px] text-sm font-medium text-primary-500">
          {t('common.announcement')}
        </div>
        <p className="text-sm font-bold text-white">{t('announcement.demo')}</p>
      </div>
      <button
        type="button"
        aria-label="Close"
        className="text-white"
        onClick={onClose}
      >
        <svg className="h-[24px] w-[24px]">
          <use href={`${commonIcons}#modal-close`} />
        </svg>
      </button>
    </div>
  )
}
