import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

function Footer() {
  return (
    <>
      <div className="sm:hidden">
        <MobileFooter />
      </div>
      <div className="hidden sm:block">
        <DesktopFooter />
      </div>
    </>
  )
}

export default Footer
