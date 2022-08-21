import { NavLink } from '@remix-run/react'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import logo from '~/assets/images/logo.svg'
import useToggle from '~/utils/hooks/useToggle'

import SearchAddressModal from '../SearchAddressModal'
import ShiftBy from '../ShiftBy'
import CurrencyDropdown from './CurrencyDropdown'
import LanguageDropdown from './LanguageDropdown'

function DesktopHeader() {
  const { t } = useTranslation()
  const [isSearchAddressModalOpen, toggleSearchAddressModal] = useToggle(false)

  return (
    <>
      <header className="bg-surface flex items-center justify-between rounded-b-xl px-12 py-6">
        <div className="flex items-center space-x-8">
          <img src={logo} alt="GPUMINE Logo" className="h-[38px]" />
          <ShiftBy y={6}>
            <LinkButton to="">{t('common.home')}</LinkButton>
          </ShiftBy>
          <ShiftBy y={6}>
            <LinkButton
              to="https://gpumine.zendesk.com/hc/zh-tw"
              isExternalLink
            >
              {t('common.help')}
            </LinkButton>
          </ShiftBy>
        </div>
        <div className="separate-with-bars relative flex space-x-4">
          <button
            type="button"
            aria-label="Search wallet address"
            className="flex items-center space-x-1 px-1 font-medium text-primary-500"
            onClick={toggleSearchAddressModal}
          >
            <svg className="h-[16px] w-[16px]">
              <use href={`${commonIcons}#search`} />
            </svg>
            <span className="text-sm">{t('common.address')}</span>
          </button>
          <LanguageDropdown />
          <CurrencyDropdown />
        </div>
      </header>

      <SearchAddressModal
        isOpen={isSearchAddressModalOpen}
        onClose={toggleSearchAddressModal}
      />
    </>
  )
}

type LinkButtonProps = {
  to: string
  children: React.ReactNode
  isExternalLink?: boolean
}

function LinkButton({ to, children, isExternalLink }: LinkButtonProps) {
  const LinkButtonStyle =
    'block h-[26px] w-[64px] pb-1 text-center text-sm leading-none text-primary-600'

  if (isExternalLink) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={LinkButtonStyle}>
        {children}
      </a>
    )
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cx(LinkButtonStyle, {
          'border-b-[2px] border-primary-600': isActive,
        })
      }
    >
      {children}
    </NavLink>
  )
}

export default DesktopHeader
