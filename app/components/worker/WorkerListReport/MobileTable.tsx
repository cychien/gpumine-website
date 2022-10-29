import cx from 'classnames'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import useToggle from '~/utils/hooks/useToggle'

function MobileTable() {
  const { t } = useTranslation()

  return (
    <table className="w-full table-auto border-collapse text-sm text-darkGray">
      <thead>
        <tr className="border-b border-primary-200">
          <Th>ID</Th>
          <Th alignRight>{t('common.realtime-computing-power')}</Th>
          <Th hidden>See more details</Th>
        </tr>
      </thead>
      <tbody>
        <RowRed />
        <Row />
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

function RowRed() {
  const [isExpanded, setIsExpanded] = useToggle(false)
  const { t } = useTranslation()

  return (
    <>
      <tr
        className={cx('border-b border-primary-200 bg-red/10 last:border-b-0', {
          'border-b-0': isExpanded,
        })}
      >
        <Td className="text-red">TB1-104-12-0001</Td>
        <Td alignRight>0.00 MH</Td>
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
        <tr className="border-b border-primary-200 bg-red/10 last:border-b-0">
          <Td colspan={3}>
            <div className="px-2">
              <div className="flex justify-between py-1">
                <div>{t('common.realtime-local-computing-power')}</div>
                <div>0.00 MH</div>
              </div>
              <div className="flex justify-between py-1">
                <div>{t('common.health-value')}</div>
                <div>0.00%</div>
              </div>
              <div className="flex justify-between py-1">
                <div>{t('common.invalid-value')}</div>
                <div>100.00%</div>
              </div>
              <div className="flex justify-between py-1">
                <div>{t('common.delay-value')}</div>
                <div>0.12%</div>
              </div>
              <div className="flex justify-between py-1">
                <div>{t('common.last-updated-at')}</div>
                <div>3 minutes ago</div>
              </div>
            </div>
          </Td>
        </tr>
      )}
    </>
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
        <Td className="text-primary-500">TB1-104-12-0001</Td>
        <Td alignRight>12.123 MH</Td>
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
          <Td colspan={3}>
            <div className="px-2">
              <div className="flex justify-between py-1">
                <div>{t('common.realtime-local-computing-power')}</div>
                <div>120.34 MH</div>
              </div>
              <div className="flex justify-between py-1">
                <div>{t('common.health-value')}</div>
                <div>98%</div>
              </div>
              <div className="flex justify-between py-1">
                <div>{t('common.invalid-value')}</div>
                <div>0.00%</div>
              </div>
              <div className="flex justify-between py-1">
                <div>{t('common.delay-value')}</div>
                <div>0.00%</div>
              </div>
              <div className="flex justify-between py-1">
                <div>{t('common.last-updated-at')}</div>
                <div>20 minutes ago</div>
              </div>
            </div>
          </Td>
        </tr>
      )}
    </>
  )
}
export default MobileTable
