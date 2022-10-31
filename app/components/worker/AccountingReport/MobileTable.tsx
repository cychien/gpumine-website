import cx from 'classnames'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import useToggle from '~/utils/hooks/useToggle'

import { useAccountingReportContext } from './context'
import StatusBadge from './StatusBadge'

function MobileTable() {
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
          <Th>{t('common.time')}</Th>
          <Th alignRight>{t('common.count')}</Th>
          <Th alignRight>{t('common.status')}</Th>
          <Th hidden>See more details</Th>
        </tr>
      </thead>
      <tbody>
        <Row />
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
          <Th>{t('common.time')}</Th>
          <Th alignRight>{t('common.count')}</Th>
          <Th alignRight>{t('common.from')}</Th>
          <Th hidden>See more details</Th>
        </tr>
      </thead>
      <tbody>
        <SystemRow />
      </tbody>
    </table>
  )
}

type ThProps = {
  className?: string
  children: React.ReactNode
  alignRight?: boolean
  hidden?: boolean
}

function Th({ className, children, alignRight, hidden }: ThProps) {
  return (
    <th className={cx('p-4 pl-1 pt-0 pb-3 font-normal', className)}>
      {hidden ? null : (
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
      )}
    </th>
  )
}

type TdProps = {
  className?: string
  children: React.ReactNode
  alignRight?: boolean
  colspan?: number
}

function Td({ className, children, alignRight, colspan = 1 }: TdProps) {
  return (
    <td
      colSpan={colspan}
      className={cx('p-4 py-3 pl-1 text-left font-medium', className, {
        '!text-right': alignRight,
      })}
    >
      {children}
    </td>
  )
}

function Row() {
  const [isExpanded, setIsExpanded] = useToggle(false)
  const { t } = useTranslation()

  return (
    <>
      <tr
        className={cx('border-b border-primary-200 last:border-b-0', {
          'border-b-0': isExpanded,
        })}
      >
        <Td>08/23 15:00</Td>
        <Td alignRight>3.12423</Td>
        <Td alignRight>
          <StatusBadge status="complete" />
        </Td>
        <Td alignRight>
          <button onClick={setIsExpanded}>
            <svg className="h-[16px] w-[16px]">
              {isExpanded ? (
                <use href={`${commonIcons}#arrow-up`} />
              ) : (
                <use href={`${commonIcons}#arrow-down`} />
              )}
            </svg>
          </button>
        </Td>
      </tr>
      {isExpanded && (
        <tr className="border-b border-primary-200 last:border-b-0">
          <Td colspan={4}>
            <div className="px-2">
              <div className="flex justify-between py-1">
                <div>{t('common.transfer-fee')}</div>
                <div>-0.00123</div>
              </div>
              <div className="flex justify-between py-1">
                <div>Txn Hash</div>
                <div className="text-primary-500">cfd13d...990c9a</div>
              </div>
            </div>
          </Td>
        </tr>
      )}
    </>
  )
}

function SystemRow() {
  const [isExpanded, setIsExpanded] = useToggle(false)
  const { t } = useTranslation()

  return (
    <>
      <tr
        className={cx('border-b border-primary-200 last:border-b-0', {
          'border-b-0': isExpanded,
        })}
      >
        <Td>08/23 15:00</Td>
        <Td alignRight>3.12423</Td>
        <Td alignRight>4fb12d...d93f70</Td>
        <Td alignRight>
          <button onClick={setIsExpanded}>
            <svg className="h-[16px] w-[16px]">
              {isExpanded ? (
                <use href={`${commonIcons}#arrow-up`} />
              ) : (
                <use href={`${commonIcons}#arrow-down`} />
              )}
            </svg>
          </button>
        </Td>
      </tr>
      {isExpanded && (
        <tr className="border-b border-primary-200 last:border-b-0">
          <Td colspan={4}>
            <div className="px-2">
              <div className="flex justify-between py-1">
                <div>{t('common.to')}</div>
                <div>4fb12d...d93f70</div>
              </div>
              <div className="flex justify-between py-1">
                <div>{t('common.note')}</div>
                <div className="text-primary-400">系統補償費</div>
              </div>
            </div>
          </Td>
        </tr>
      )}
    </>
  )
}

export default MobileTable
