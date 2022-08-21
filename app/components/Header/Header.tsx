import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

function Header() {
  return (
    <>
      <div className="sm:hidden">
        <MobileHeader />
      </div>
      <div className="hidden sm:block">
        <DesktopHeader />
      </div>
    </>
  )
}

export default Header
