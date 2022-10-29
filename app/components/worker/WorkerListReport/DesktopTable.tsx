import cx from 'classnames'
import produce from 'immer'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'

import { useWorkerListReportContext } from './context'
import type { WorkerSortBy } from './type'

function DesktopTable() {
  const { t } = useTranslation()

  return (
    <table className="w-full table-auto border-collapse text-sm text-darkGray">
      <thead>
        <tr className="border-b border-primary-200">
          <Th sortByValue="id">ID</Th>
          <Th alignRight sortByValue="realtime-cp">
            {t('common.realtime-computing-power')}
          </Th>
          <Th alignRight sortByValue="realtime-local-cp">
            {t('common.realtime-local-computing-power')}
          </Th>
          <Th alignRight sortByValue="health-value">
            {t('common.health-value')}
          </Th>
          <Th alignRight sortByValue="invalid-value">
            {t('common.invalid-value')}
          </Th>
          <Th alignRight sortByValue="delay-value">
            {t('common.delay-value')}
          </Th>
          <Th alignRight sortByValue="updated-at">
            {t('common.last-updated-at')}
          </Th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-primary-200 bg-red/10 last:border-b-0">
          <Td className="text-red">TB1-104-12-0001</Td>
          <Td alignRight>0.00 MH</Td>
          <Td alignRight>0.00 MH</Td>
          <Td alignRight>0.00%</Td>
          <Td alignRight>100.00%</Td>
          <Td alignRight>0.12%</Td>
          <Td alignRight>3 minutes ago</Td>
        </tr>
        <tr className="border-b border-primary-200 last:border-b-0">
          <Td className="text-primary-500">TB1-104-12-0001</Td>
          <Td alignRight>12.123 MH</Td>
          <Td alignRight>120.34 MH</Td>
          <Td alignRight>98%</Td>
          <Td alignRight>0.00%</Td>
          <Td alignRight>0.00%</Td>
          <Td alignRight>20 minutes ago</Td>
        </tr>
      </tbody>
    </table>
  )
}

type ThProps = {
  className?: string
  children: React.ReactNode
  alignRight?: boolean
  sortByValue: WorkerSortBy
}

function Th({ className, children, alignRight, sortByValue }: ThProps) {
  const { settings, setSettings } = useWorkerListReportContext()

  return (
    <th
      className={cx('cursor-pointer p-4 pl-1 pt-0 pb-3 font-normal', className)}
      onClick={() => {
        setSettings(
          produce(settings, (draft) => {
            if (settings.filters.sort.by !== sortByValue) {
              draft.filters.sort.by = sortByValue
              draft.filters.sort.direction = 'desc'
            } else {
              draft.filters.sort.direction =
                settings.filters.sort.direction === 'desc' ? 'asc' : 'desc'
            }

            draft.page = 1
          })
        )
      }}
    >
      <span
        className={cx('flex items-center space-x-0.5', {
          'justify-end': alignRight,
        })}
      >
        <span>{children}</span>
        <svg className="h-[16px] w-[16px]">
          <use href={`${commonIcons}#sort`} />
        </svg>
      </span>
    </th>
  )
}

type TdProps = {
  className?: string
  children: React.ReactNode
  alignRight?: boolean
}

function Td({ className, children, alignRight }: TdProps) {
  return (
    <td
      className={cx('p-4 py-3 pl-1 text-left font-medium', className, {
        '!text-right': alignRight,
      })}
    >
      {children}
    </td>
  )
}

export default DesktopTable
