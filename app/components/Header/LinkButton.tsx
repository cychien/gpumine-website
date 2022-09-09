import { NavLink } from '@remix-run/react'
import cx from 'classnames'

type LinkButtonProps = {
  to: string
  children: React.ReactNode
  isExternalLink?: boolean
}

function LinkButton({ to, children, isExternalLink }: LinkButtonProps) {
  const LinkButtonStyle =
    'block h-[26px] px-3 pb-1 text-center text-sm leading-none text-primary-600'

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
      prefetch="intent"
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

export default LinkButton
