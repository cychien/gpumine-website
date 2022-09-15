import ReactTooltip from 'react-tooltip'
import { ClientOnly } from 'remix-utils'

type TooltipProps = {
  id: string
}

function Tooltip({ id }: TooltipProps) {
  return (
    <ClientOnly>
      {() => (
        <ReactTooltip
          id={id}
          className="!max-w-[266px] !rounded-lg !bg-primary-100 !p-2 !text-darkGray"
          border
          borderColor="#96B2FF"
          arrowColor="#DAE2F9"
          place="right"
          offset={{ right: 4 }}
          effect="solid"
        />
      )}
    </ClientOnly>
  )
}

export default Tooltip
