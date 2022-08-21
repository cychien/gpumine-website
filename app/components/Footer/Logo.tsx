import { Link } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

import logoEn from '~/assets/images/logo-footer-en.png'
import logoZh from '~/assets/images/logo-footer-zh.png'
import type { SupportedLanguage } from '~/types/i18n'
import withLang from '~/utils/i18n/withLang'

const LOGOS: Record<SupportedLanguage, string> = {
  'en-US': logoEn,
  'zh-TW': logoZh,
}

type LogoProps = {
  className?: string
}

function Logo({ className = '' }: LogoProps) {
  const { i18n } = useTranslation()

  const currentLanguage = i18n.language as SupportedLanguage

  return (
    <Link to={withLang('', currentLanguage)} prefetch="intent">
      <img
        src={LOGOS[currentLanguage]}
        alt="GPUMINE Logo"
        className={className}
      />
    </Link>
  )
}

export default Logo
