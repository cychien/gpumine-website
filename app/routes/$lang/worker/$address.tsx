import type { LoaderFunction } from '@remix-run/node'
import { useParams } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

import Title from '~/components/Title'
import AddressCard from '~/components/worker/AddressCard'
import BalanceCard from '~/components/worker/BalanceCard'
import MachineComputingPowerCard from '~/components/worker/MachineComputingPowerCard'
import MachineHealthCard from '~/components/worker/MachineHealthCard'
import MachineStatusCard from '~/components/worker/MachineStatusCard'
import PaidBalanceCard from '~/components/worker/PaidBalanceCard'

export const loader: LoaderFunction = ({ params }) => {
  if (!params.address) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  return null
}

export default function Address() {
  const { address } = useParams()
  const { t } = useTranslation()

  return (
    <main className="mx-auto flex w-full max-w-[964px] flex-col px-3 pt-4 pb-8 sm:pb-16">
      <section className="flex flex-col space-y-3 lg:space-y-5">
        <div className="relative mb-2 self-start sm:self-stretch lg:mb-0">
          <Title>{t('common.mining-status')}</Title>
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
    </main>
  )
}
