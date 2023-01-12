import cx from 'classnames'

type Props = {
  className?: string
  children: React.ReactNode
}

function ReportTitle({ className, children }: Props) {
  return (
    <h2
      className={cx(
        'text-xl font-bold text-darkGray sm:text-center',
        className
      )}
      children={children}
    />
  )
}

export default ReportTitle
