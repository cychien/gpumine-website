import produce from 'immer'

import commonIcons from '~/assets/icons/common.svg'

import { useWorkerListReportContext } from './context'

function Pagination() {
  const { settings, setSettings } = useWorkerListReportContext()

  return (
    <div className="flex justify-center space-x-3">
      <button
        type="button"
        className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md bg-white font-medium text-darkGray disabled:cursor-not-allowed disabled:opacity-40"
        disabled={settings.page <= 1}
        onClick={() => {
          setSettings(
            produce(settings, (draft) => {
              draft.page = settings.page - 1
            })
          )
        }}
      >
        <svg className="h-[10px] w-[10px]">
          <use href={`${commonIcons}#arrow-left`} />
        </svg>
      </button>
      <button
        type="button"
        className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md bg-primary-200 font-medium text-darkGray"
        onClick={() => {
          setSettings(
            produce(settings, (draft) => {
              draft.page = 1
            })
          )
        }}
      >
        1
      </button>
      <button
        type="button"
        className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md bg-white font-medium text-darkGray"
      >
        2
      </button>
      <button
        type="button"
        className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md bg-white font-medium text-darkGray"
      >
        3
      </button>
      <button
        type="button"
        className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md bg-white font-medium text-darkGray"
      >
        <svg className="h-[10px] w-[10px]">
          <use href={`${commonIcons}#arrow-right`} />
        </svg>
      </button>
    </div>
  )
}

export default Pagination
