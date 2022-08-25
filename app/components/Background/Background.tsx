import bgBottomLeft from '~/assets/images/bg-bottom-left.svg'
import bgTopCenter from '~/assets/images/bg-top-center.svg'
import bgTopRight from '~/assets/images/bg-top-right.svg'

function Background() {
  return (
    <div className="relative h-full w-full select-none opacity-60">
      <div className="absolute top-[-126px] right-[-162px]">
        <img
          src={bgTopRight}
          alt=""
          aria-hidden
          className="absolute top-[120px] right-[-80px] lg:top-[230px] lg:right-auto"
        />
        <img
          src={bgTopCenter}
          alt=""
          aria-hidden
          className="relative right-[280px] top-[40px] lg:right-[430px] lg:top-[100px]"
        />
      </div>
      <img
        src={bgBottomLeft}
        alt=""
        aria-hidden
        className="absolute bottom-0 left-[-32px] hidden xl:block"
      />
    </div>
  )
}

export default Background
