import { Link } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

import logo from '~/assets/images/logo.svg'
import withLang from '~/utils/i18n/withLang'

type LogoProps = {
  className?: string
}

function Logo({ className = '' }: LogoProps) {
  const { i18n } = useTranslation()

  return (
    <Link to={withLang('', i18n.language)} prefetch="intent">
      <img src={logo} alt="GPUMINE Logo" className={className} />
    </Link>
  )
}

export default Logo
