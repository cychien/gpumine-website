import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import { LANGUAGE_NAMES } from '~/constants/app'
import type { SupportedLanguage } from '~/utils/i18n/types'

import Dropdown from './Dropdown'

function LanguageDropdown() {
  const { i18n } = useTranslation()

  const currentLanguage = i18n.language as SupportedLanguage

  const languageOptions = useMemo(
    () =>
      Object.entries(LANGUAGE_NAMES).map(([code, name]) => ({
        label: name,
        value: code,
      })),
    []
  )

  const handleLanguageChange = useCallback(
    (language: SupportedLanguage) => {
      i18n.changeLanguage(language)
    },
    [i18n]
  )

  return (
    <Dropdown
      value={currentLanguage}
      onChange={handleLanguageChange}
      options={languageOptions}
    >
      <button
        type="button"
        aria-label="Switch language"
        className="flex items-center space-x-1 px-1 text-primary-700"
      >
        <svg className="h-[14px] w-[18px]">
          <use href={`${commonIcons}#globe`} />
        </svg>
        <span className="text-sm">{LANGUAGE_NAMES[currentLanguage]}</span>
        <svg className="h-[6px] w-[12px]">
          <use href={`${commonIcons}#arrow-down`} />
        </svg>
      </button>
    </Dropdown>
  )
}

export default LanguageDropdown
