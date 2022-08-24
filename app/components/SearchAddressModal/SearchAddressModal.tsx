import { Dialog } from '@headlessui/react'
import { useNavigate } from '@remix-run/react'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import commonIcons from '~/assets/icons/common.svg'
import withLang from '~/utils/i18n/withLang'

type SearchAddressModalProps = {
  isOpen: boolean
  onClose: () => void
}

function SearchAddressModal({
  isOpen,
  onClose: propOnClose,
}: SearchAddressModalProps) {
  const [address, setAddress] = useState<string>('')
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const handleClose = useCallback(() => {
    propOnClose()
    setAddress('')
  }, [propOnClose])

  const handlesSearchButtonClick = useCallback(() => {
    propOnClose()
    setAddress('')
    navigate(withLang(`/workers/${address}`, i18n.language))
  }, [address, i18n.language, navigate, propOnClose])

  return (
    <Dialog as="div" open={isOpen} onClose={handleClose}>
      <div className="fixed inset-0 bg-black bg-opacity-25" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-md relative flex w-full flex-col items-center rounded-lg bg-white px-3 py-7 shadow-xl sm:w-[600px] sm:py-10 sm:px-10">
            <Dialog.Title className="text-center font-bold text-primary-500">
              {t('common.wallet-address')}
            </Dialog.Title>

            <div className="mt-5 self-stretch">
              <div className="flex h-[40px] min-h-[40px] items-center rounded-lg border-2 border-primary-200 pl-1">
                <div className="flex items-center border-r-2 border-primary-300 pl-1 pr-3 text-primary-400">
                  <svg className="h-[28px] w-[28px]">
                    <use href={`${commonIcons}#eth`} />
                  </svg>
                  <span className="font-medium">ETH</span>
                </div>
                <div className="flex-1 px-2">
                  <input
                    type="text"
                    className="w-full text-darkGray shadow-none outline-none"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="flex h-[40px] min-h-[40px] w-[160px] items-center justify-center rounded-full bg-primary-500 font-bold text-white"
                onClick={handlesSearchButtonClick}
              >
                {t('common.search')}
              </button>
            </div>

            <button
              type="button"
              aria-label="Close"
              className="absolute top-3 right-3 text-lightGray sm:top-4 sm:right-4"
              onClick={handleClose}
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
