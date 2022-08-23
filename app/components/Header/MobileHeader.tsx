import commonIcons from '~/assets/icons/common.svg'

import Logo from './Logo'

type MobileHeaderProps = {
  openSearchAddressModal: () => void
}

function MobileHeader({ openSearchAddressModal }: MobileHeaderProps) {
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
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-[24px] min-h-[24px] w-[24px] min-w-[24px] items-center justify-center"
        >
          <svg className="h-[14px] w-[18px] text-primary-700">
            <use href={`${commonIcons}#menu`} />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default MobileHeader
