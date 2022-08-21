import cx from 'classnames'
import { useMemo } from 'react'

import commonIcons from '~/assets/icons/common.svg'

function ButtonGroup() {
  return (
    <div className="flex space-x-3">
      <IconButton ariaLabel="Email" isLink to="mailto:john@gpumine.org">
        <svg className="h-[20px] w-[20px] text-white">
          <use href={`${commonIcons}#email`} />
        </svg>
      </IconButton>
      <IconButton
        ariaLabel="Email"
        isLink
        to="https://www.facebook.com/gpumine.org"
      >
        <svg className="h-[20px] w-[20px] text-white">
          <use href={`${commonIcons}#facebook`} />
        </svg>
      </IconButton>
      <IconButton
        ariaLabel="Line"
        isLink
        to="https://gpumine.link/gpuminegroup"
      >
        <svg className="h-[20px] w-[20px] text-white">
          <use href={`${commonIcons}#line`} />
        </svg>
      </IconButton>
      <IconButton
        ariaLabel="Toggle dark mode"
        variant="outline"
        onClick={() => {}}
      >
        <svg className="h-[20px] w-[20px] text-primary-700">
          <use href={`${commonIcons}#dark-mode`} />
        </svg>
      </IconButton>
    </div>
  )
}

type IconButtonProps = {
  variant?: 'full' | 'outline'
  ariaLabel?: string
  isLink?: boolean
  to?: string
  onClick?: () => void
  children: React.ReactNode
}

function IconButton({
  variant = 'full',
  ariaLabel,
  isLink,
  to,
  onClick,
  children,
}: IconButtonProps) {
  const IconButtonStyle = useMemo(
    () =>
      cx('flex h-[30px] w-[30px] items-center justify-center rounded-full', {
        'bg-primary-700': variant === 'full',
        'border border-primary-700': variant === 'outline',
      }),
    [variant]
  )

  if (isLink) {
    return (
      <a
        href={to}
        aria-label={ariaLabel}
        target="_blank"
        rel="noreferrer"
        className={IconButtonStyle}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={IconButtonStyle}
    >
      {children}
    </button>
  )
}

export default ButtonGroup
