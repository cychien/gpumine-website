import type { LoaderFunction } from '@remix-run/node'
import { useParams } from '@remix-run/react'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import AddressReport from '~/components/report/AddressReport'
import BalanceReport from '~/components/report/BalanceReport'
import EstimatedIncomeReport from '~/components/report/EstimatedIncomeReport'
import MachineComputingPowerCard from '~/components/report/MachineComputingPowerReport'
import MachineHealthReport from '~/components/report/MachineHealthReport'
import MachineStatusReport from '~/components/report/MachineStatusReport'
import PaidBalanceReport from '~/components/report/PaidBalanceReport'
import { Report, ReportTitle } from '~/components/report/Report'
import WithdrawReport from '~/components/report/WithdrawReport'
import SegmentedControl from '~/components/SegmentedControl'
import AccountingReport from '~/components/worker/AccountingReport'
import HistoryRevenueReport from '~/components/worker/HistoryRevenueReport'
import WorkerListReport from '~/components/worker/WorkerListReport'

export const loader: LoaderFunction = ({ params }) => {
  if (!params.address) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  return null
}

export default function Address() {
  const [mode, setMode] = React.useState<string>('lite')
  const { address } = useParams()
  const { t } = useTranslation()

  return (
    <main className="mx-auto mt-8 mb-8 flex w-full max-w-[964px] px-3 sm:mt-10 sm:pb-16">
      <h1 className="sr-only">{t('common.miner-info')}</h1>
      <div className="w-full flex-col space-y-16">
        <Report>
          <div className="relative">
            <ReportTitle>{t('common.mining-status')}</ReportTitle>
            <SegmentedControl
              className="absolute right-0 top-1/2 -translate-y-1/2 border-[2px] border-white p-0.5"
              controlClassName="py-1.5 px-5 text-darkGray"
              activeControlClassName="bg-gradient-to-r from-primary-600 to-primary-400"
              options={[
                { label: t('common.lite-mode'), value: 'lite' },
                { label: t('common.advanced-mode'), value: 'advanced' },
              ]}
              value={mode}
              onChange={setMode}
            />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-2 lg:grid-cols-12 lg:gap-5">
            <div className="lg:col-span-12">
              <AddressReport address={address || ''} />
            </div>
            <div className="lg:col-span-4">
              <MachineHealthReport />
            </div>
            <div className="lg:col-span-4">
              <MachineStatusReport />
            </div>
            <div className="flex flex-col space-y-2 lg:col-span-4 lg:space-y-5">
              <BalanceReport />
              <PaidBalanceReport />
            </div>
            <div className="lg:col-span-12">
              <MachineComputingPowerCard />
            </div>
          </div>
        </Report>
        <WorkerListReport />
        <HistoryRevenueReport />
        <AccountingReport />
        <WithdrawReport />
        <div className="hidden sm:block">
          <EstimatedIncomeReport />
        </div>
      </div>
    </main>
  )
}
