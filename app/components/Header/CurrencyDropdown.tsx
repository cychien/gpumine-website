import { useCallback, useMemo } from 'react'

import commonIcons from '~/assets/icons/common.svg'

import Dropdown from './Dropdown'

function CurrencyDropdown() {
  const options = useMemo(
    () => [
      { label: 'USD', value: 'usd' },
      { label: 'TWD', value: 'twd' },
      { label: 'CNY', value: 'cny' },
      { label: 'HKD', value: 'hkd' },
      { label: 'GBP', value: 'gbp' },
    ],
    []
  )

  const handleChange = useCallback(() => {}, [])

  return (
    <Dropdown value="twd" onChange={handleChange} options={options}>
      <button
        type="button"
        aria-label="Switch currency"
        className="flex items-center space-x-1 px-1 text-primary-700"
      >
        <span className="text-sm">TWD</span>
        <svg className="h-[6px] w-[12px] text-primary-700">
          <use href={`${commonIcons}#arrow-down`} />
        </svg>
      </button>
    </Dropdown>
  )
}

export default CurrencyDropdown
