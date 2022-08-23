import { Dialog } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'

type SearchAddressModalProps = {
  isOpen: boolean
  onClose: () => void
}

function SearchAddressModal({ isOpen, onClose }: SearchAddressModalProps) {
  const { t } = useTranslation()

  return (
    <Dialog as="div" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black bg-opacity-25" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-md relative flex w-full flex-col items-center rounded-lg bg-white px-3 py-7 shadow-xl sm:w-[600px] sm:py-10 sm:px-10">
            <Dialog.Title className="text-center font-bold text-primary-500">
              {t('common.wallet-address')}
            </Dialog.Title>

            <div className="mt-5">input</div>

            <div className="mt-6">
              <button
                type="button"
                className="flex h-[40px] min-h-[40px] w-[160px] items-center justify-center rounded-full bg-primary-500 font-bold text-white"
                onClick={() => {}}
              >
                {t('common.search')}
              </button>
            </div>

            <button
              type="button"
              aria-label="Close"
              className="absolute top-3 right-3 text-lightGray sm:top-4 sm:right-4"
              onClick={onClose}
            >
              <svg className="h-[24px] w-[24px]">
                <use href={`${commonIcons}#modal-close`} />
              </svg>
            </button>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default SearchAddressModal
