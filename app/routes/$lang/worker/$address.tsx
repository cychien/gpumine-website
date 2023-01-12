import type { LoaderFunction } from '@remix-run/node'
import { useParams } from '@remix-run/react'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import EstimatedIncomeReport from '~/components/miner/EstimatedIncomeReport'
import WithdrawReport from '~/components/miner/WithdrawReport'
import SegmentedControl from '~/components/SegmentedControl'
import AccountingReport from '~/components/worker/AccountingReport'
import AddressCard from '~/components/worker/AddressCard'
import BalanceCard from '~/components/worker/BalanceCard'
import HistoryRevenueReport from '~/components/worker/HistoryRevenueReport'
import MachineComputingPowerCard from '~/components/worker/MachineComputingPowerCard'
import MachineHealthCard from '~/components/worker/MachineHealthCard'
import MachineStatusCard from '~/components/worker/MachineStatusCard'
import PaidBalanceCard from '~/components/worker/PaidBalanceCard'
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
    <main className="mx-auto flex w-full max-w-[964px] flex-col space-y-16 px-3 pt-4 pb-8 sm:pb-16">
      <section className="mt-5 flex flex-col space-y-3 sm:mt-7 lg:space-y-5">
        <div className="relative mb-2 lg:mb-0">
          <h1 className="text-xl font-bold sm:text-center">
            {t('common.mining-status')}
          </h1>
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

        <div className="flex flex-col space-y-3 sm:space-y-5">
          <AddressCard address={address || ''} />
        </div>

        <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="flex-1">
            <MachineHealthCard />
          </div>
          <div className="min-w-[206px]">
            <MachineStatusCard />
          </div>
          <div className="flex flex-1 flex-col space-y-3 lg:space-y-4">
            <BalanceCard />
            <PaidBalanceCard />
          </div>
        </div>

        <div>
          <MachineComputingPowerCard />
        </div>
      </section>
      <WorkerListReport />
      <HistoryRevenueReport />
      <AccountingReport />
      <WithdrawReport />
      <div className="hidden sm:block">
        <EstimatedIncomeReport />
      </div>
    </main>
  )
}
