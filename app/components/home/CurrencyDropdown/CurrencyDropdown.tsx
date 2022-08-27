import { useCallback, useMemo } from 'react'

import commonIcons from '~/assets/icons/common.svg'
import Dropdown from '~/components/Dropdown'
import type { CurrencyType } from '~/types/currency'
import { useCurrency } from '~/utils/currency/CurrencyProvider'

export default function CurrencyDropdown() {
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
    <Dropdown
      value={currency}
      onChange={handleChange}
      options={options}
      optionsClassName="!border-primary-400"
      optionClassName="!text-primary-500"
    >
      <button
        type="button"
        aria-label="Switch currency"
        className="flex items-center space-x-2 rounded-lg border border-primary-400 bg-white/60 px-3 py-[6px] text-primary-500"
      >
        <span className="text-sm">{currency}</span>
        <svg className="h-[20px] min-h-[20px] w-[20px] min-w-[20px]">
          <use href={`${commonIcons}#switch`} />
        </svg>
      </button>
    </Dropdown>
  )
}
