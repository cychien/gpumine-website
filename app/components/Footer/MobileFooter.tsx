import { useTranslation } from 'react-i18next'

import ButtonGroup from './ButtonGroup'
import Logo from './Logo'

function MobileFooter() {
  const { t } = useTranslation()

  return (
    <footer className="bg-surface flex flex-col items-center rounded-t-xl pt-5 pb-2 shadow-[4px_-4px_8px_0_rgba(189,206,252,0.2)]">
      <div className="flex justify-center space-x-8">
        <a
          className="block text-center text-sm text-primary-600"
          href="https://gpumine.zendesk.com/hc/zh-tw"
        >
          {t('common.help-center')}
        </a>
        <a
          className="block text-center text-sm text-primary-600"
          href="mailto:john@gpumine.org"
        >
          {t('common.contact')}
        </a>
      </div>

      <div className="mt-5">
        <ButtonGroup />
      </div>

      <div className="mt-4">
        <Logo className="h-[42px]" />
      </div>

      <div className="mt-4">
        <div className="text-xs text-[#3D3D3D]">© SUPPORT JOHN@GPUMINE.ORG</div>
      </div>
    </footer>
  )
}

export default MobileFooter
