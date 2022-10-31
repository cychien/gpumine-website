import cx from 'classnames'
import produce from 'immer'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'

import { useAccountingReportContext } from './context'
import StatusBadge from './StatusBadge'
import type { AccountingSortBy } from './type'

function DesktopTable() {
  const { settings } = useAccountingReportContext()

  return settings.filters.type === 'accounting' ? (
    <AccountingTable />
  ) : (
    <SystemTable />
  )
}

function AccountingTable() {
  const { t } = useTranslation()

  return (
    <table className="w-full table-auto border-collapse text-sm text-darkGray">
      <thead>
        <tr className="border-b border-primary-200">
          <Th sortByValue="created-at">{t('common.time')}</Th>
          <Th alignRight sortByValue="count">
            {t('common.count')}
          </Th>
          <Th alignRight sortByValue="transfer-fee">
            {t('common.transfer-fee')}
          </Th>
          <Th alignRight sortByValue="tx-hash">
            Txn Hash
          </Th>
          <Th alignRight sortByValue="status">
            {t('common.status')}
          </Th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-primary-200 last:border-b-0">
          <Td>2020/03/08 15:31:22</Td>
          <Td alignRight>120.345</Td>
          <Td alignRight>-0.00123</Td>
          <Td alignRight className="text-primary-600">
            cfd13d...990c9a
          </Td>
          <Td alignRight>
            <StatusBadge status="complete" />
          </Td>
        </tr>
      </tbody>
    </table>
  )
}

function SystemTable() {
  const { t } = useTranslation()

  return (
    <table className="w-full table-auto border-collapse text-sm text-darkGray">
      <thead>
        <tr className="border-b border-primary-200">
          <Th sortByValue="created-at">{t('common.time')}</Th>
          <Th alignRight sortByValue="count">
            {t('common.count')}
          </Th>
          <Th alignRight>{t('common.from')}</Th>
          <Th alignRight>{t('common.to')}</Th>
          <Th alignRight>{t('common.note')}</Th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-primary-200 last:border-b-0">
          <Td>2020/03/08 15:31:22</Td>
          <Td alignRight>120.345</Td>
          <Td alignRight>cfd13d...990c9a</Td>
          <Td alignRight>cfd13d...990c9a</Td>
          <Td alignRight className="text-primary-400">
            系統補償費
          </Td>
        </tr>
      </tbody>
    </table>
  )
}

type ThProps = {
  className?: string
  children: React.ReactNode
  alignRight?: boolean
  sortByValue?: AccountingSortBy
}

function Th({ className, children, alignRight, sortByValue }: ThProps) {
  const { settings, setSettings } = useAccountingReportContext()

  return (
    <th
      className={cx('cursor-pointer p-4 pl-1 pt-0 pb-3 font-normal', className)}
      onClick={() => {
        if (!sortByValue) return

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
