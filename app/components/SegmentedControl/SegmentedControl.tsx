import cx from 'classnames'

type Option = {
  label: string
  value: string
}

type SegmentedControlProps = {
  options: Option[]
  value: string
  onChange: (newValue: string) => void
  className?: string
  controlClassName?: string
  activeControlClassName?: string
}

function SegmentedControl({
  options,
  value: currentValue,
  onChange,
  className,
  controlClassName,
  activeControlClassName,
}: SegmentedControlProps) {
  return (
    <div
      className={cx(
        'inline-flex rounded-full border border-primary-200 p-1',
        className
      )}
    >
      {options.map(({ label, value }) => (
        <button
          key={value}
          className={cx(
            'flex cursor-pointer items-center justify-center rounded-full py-1 px-3 text-xs font-medium text-primary-600',
            controlClassName,
            {
              [`bg-primary-600 !text-white ${activeControlClassName}`]:
                currentValue === value,
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
