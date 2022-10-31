import cx from 'classnames'

import commonIcons from '~/assets/icons/common.svg'

type Status = 'complete' | 'ongoing' | 'pending'

type StatusBadgeProps = {
  status: Status
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <>
      <span
        className={cx(
          'hidden rounded-md py-0.5 px-4 text-sm font-medium text-white lg:inline-block',
          {
            'bg-green': status === 'complete',
            'bg-primary-400': status === 'ongoing',
            'bg-orange': status === 'pending',
          }
        )}
      >
        {status === 'complete'
          ? 'Completed'
          : status === 'ongoing'
          ? 'Ongoing'
          : status === 'pending'
          ? 'Pending'
          : ''}
      </span>
      <span className="inline-block lg:hidden">
        {status === 'complete' ? (
          <svg className="h-[20px] w-[20px] text-green">
            <use href={`${commonIcons}#check-circle`} />
          </svg>
        ) : status === 'ongoing' ? (
          <svg className="h-[20px] w-[20px] text-primary-500">
            <use href={`${commonIcons}#clock`} />
          </svg>
        ) : status === 'pending' ? (
          <svg className="h-[20px] w-[20px] text-orange">
            <use href={`${commonIcons}#pending`} />
          </svg>
        ) : (
          ''
        )}
      </span>
    </>
  )
}

export default StatusBadge
