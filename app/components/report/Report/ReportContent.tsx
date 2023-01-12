import cx from 'classnames'

type Props = {
  className?: string
  children: React.ReactNode
}

function ReportContent({ className, children }: Props) {
  return (
    <div
      className={cx(
        'bg-surface rounded-[20px] px-4 py-3 shadow-[4px_4px_6px_0_rgba(142,149,170,0.2)]',
        className
      )}
      children={children}
    />
  )
}

export default ReportContent
