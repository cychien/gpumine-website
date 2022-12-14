import { useCallback, useMemo } from 'react'

import commonIcons from '~/assets/icons/common.svg'
import type { CurrencyType } from '~/types/currency'
import { useCurrency } from '~/utils/currency/CurrencyProvider'

import Dropdown from '../Dropdown'

function CurrencyDropdown() {
  const { currency, setCurrency } = useCurrency()

  const options = useMemo(
    () => [
      { label: 'USD', value: 'USD' },
      { label: 'TWD', value: 'TWD' },
      { label: 'CNY', value: 'CNY' },
      { label: 'HKD', value: 'HKD' },
      { label: 'GBP', value: 'GBP' },
    ],
    []
  )

  const handleChange = useCallback(
    (currency: CurrencyType) => {
      setCurrency(currency)
    },
    [setCurrency]
  )

  return (
    <Dropdown value={currency} onChange={handleChange} options={options}>
      <button
        type="button"
        aria-label="Switch currency"
        className="flex items-center space-x-1 px-1 text-primary-700"
      >
        <span className="text-sm">{currency}</span>
        <svg className="h-[6px] w-[12px] text-primary-700">
          <use href={`${commonIcons}#arrow-down`} />
        </svg>
      </button>
    </Dropdown>
  )
}

export default CurrencyDropdown
