import cx from 'classnames'

type Option = {
  label: string
  value: string
}

type SegmentedControlProps = {
  options: Option[]
  value: string
  onChange: (newValue: string) => void
}

function SegmentedControl({
  options,
  value: currentValue,
  onChange,
}: SegmentedControlProps) {
  return (
    <div className="inline-flex rounded-full border border-primary-200 p-1">
      {options.map(({ label, value }) => (
        <button
          key={value}
          className={cx(
            'flex cursor-pointer items-center justify-center rounded-full py-1 px-3 text-xs font-medium text-primary-600',
            {
              'bg-primary-600 !text-white': currentValue === value,
            }
          )}
          onClick={() => {
            onChange(value)
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default SegmentedControl
