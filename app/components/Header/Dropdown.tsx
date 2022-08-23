import { Listbox } from '@headlessui/react'
import cx from 'classnames'
import { Fragment } from 'react'

type DropdownProps = {
  value: string
  onChange: (value: any) => void
  options: Array<{ label: string; value: string }>
  children: React.ReactNode
}

function Dropdown({ value, onChange, options, children }: DropdownProps) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button as={Fragment}>{children}</Listbox.Button>
        <Listbox.Options className="absolute mt-2 w-full overflow-hidden rounded-[8px] border border-primary-700">
          {options.map(({ label, value }: { label: string; value: string }) => (
            <Listbox.Option
              key={value}
              className={({ active }) =>
                cx(
                  'cursor-pointer bg-white py-2 text-center text-sm text-primary-700 hover:bg-primary-100',
                  {
                    'bg-primary-100': active,
                  }
                )
              }
              value={value}
            >
              {label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}

export default Dropdown
