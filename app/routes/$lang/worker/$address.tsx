import type { LoaderFunction } from '@remix-run/node'
import { useParams } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

import Title from '~/components/Title'
import AddressCard from '~/components/worker/AddressCard'

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
      <section className="flex flex-col space-y-4 sm:space-y-5">
        <div className="relative self-start sm:self-stretch">
          <Title>{t('worker.mining-status')}</Title>
        </div>

        <div className="flex flex-col space-y-3 sm:space-y-5">
          <AddressCard address={address || ''} />
        </div>
      </section>
    </main>
  )
}
