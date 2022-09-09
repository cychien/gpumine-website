import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import ShiftBy from '~/components/ShiftBy'

import StatsCard from '../../StatsCard'

type AddressCardProps = {
  address: string
}

function AddressCard({ address }: AddressCardProps) {
  const { t } = useTranslation()

  return (
    <>
      <StatsCard>
        <div className="flex items-center justify-between">
          <div className="flex space-x-1 sm:space-x-3">
            <div className="flex flex-col justify-center text-primary-500 sm:flex-row sm:items-center">
              <svg className="h-[32px] w-[32px]">
                <use href={`${commonIcons}#eth`} />
              </svg>
              <div className="hidden font-bold sm:mt-0 sm:block">ETH</div>
            </div>

            <div className="my-1 hidden h-8 w-px bg-darkGray sm:block" />

            <div className="flex items-center  text-darkGray sm:font-medium">
              <ShiftBy y={-1}>{address}</ShiftBy>
            </div>
          </div>
          <CopyToClipboard
            text={address}
            onCopy={() => {
              toast(t('common.copy-complete') + '!')
            }}
          >
            <button
              type="button"
              className="translate-y-[-2px] py-3 font-bold text-primary-500 sm:translate-y-[-1px] sm:p-3"
            >
              Copy
            </button>
          </CopyToClipboard>
        </div>
      </StatsCard>
      <Toaster
        position="top-right"
        toastOptions={{
          className:
            '!bg-green !text-white !px-3 !py-2 !rounded-xl !text-sm font-medium',
          duration: 3000,
        }}
      />
    </>
  )
}

export default AddressCard
