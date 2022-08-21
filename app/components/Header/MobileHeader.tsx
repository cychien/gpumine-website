import commonIcons from '~/assets/icons/common.svg'
import logo from '~/assets/images/logo.svg'

function MobileHeader() {
  return (
    <header className="bg-surface flex items-center justify-between rounded-b-xl p-3">
      <img src={logo} alt="GPUMINE Logo" className="h-[30px]" />
      <div className="flex space-x-3">
        <button
          type="button"
          aria-label="Search wallet address"
          className="flex h-[24px] min-h-[24px] w-[24px] min-w-[24px] items-center justify-center"
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