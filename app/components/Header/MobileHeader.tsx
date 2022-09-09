import { Popover } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import withLang from '~/utils/i18n/withLang'

import LinkButton from './LinkButton'
import Logo from './Logo'

type MobileHeaderProps = {
  openSearchAddressModal: () => void
}

function MobileHeader({ openSearchAddressModal }: MobileHeaderProps) {
  const { t, i18n } = useTranslation()

  return (
    <header className="bg-surface flex items-center justify-between rounded-b-xl p-3 shadow-[0_4px_8px_0_rgba(189,206,252,0.2)]">
      <Logo className="h-[30px]" />
      <div className="flex space-x-3">
        <button
          type="button"
          aria-label="Search wallet address"
          className="flex h-[24px] min-h-[24px] w-[24px] min-w-[24px] items-center justify-center"
          onClick={openSearchAddressModal}
        >
          <svg className="h-[16px] w-[16px] text-primary-500">
            <use href={`${commonIcons}#search`} />
          </svg>
        </button>

        <Popover className="relative">
          <Popover.Button
            aria-label="Open menu"
            className="flex h-[24px] min-h-[24px] w-[24px] min-w-[24px] items-center justify-center"
          >
            <svg className="h-[14px] w-[18px] text-primary-700">
              <use href={`${commonIcons}#menu`} />
            </svg>
          </Popover.Button>

          <Popover.Panel className="absolute right-0 bottom-0 min-w-[112px] translate-y-[calc(100%+12px)] rounded-xl bg-white px-6 pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <LinkButton to={withLang('', i18n.language)}>
                {t('common.home')}
              </LinkButton>
              <LinkButton
                to="https://gpumine.zendesk.com/hc/zh-tw"
                isExternalLink
              >
                {t('common.help')}
              </LinkButton>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </header>
  )
}

export default MobileHeader
