import useToggle from '~/utils/hooks/useToggle'

import SearchAddressModal from '../SearchAddressModal'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

function Header() {
  const [isSearchAddressModalOpen, toggleSearchAddressModal] = useToggle(false)

  return (
    <>
      <div className="sm:hidden">
        <MobileHeader openSearchAddressModal={toggleSearchAddressModal} />
      </div>
      <div className="hidden sm:block">
        <DesktopHeader openSearchAddressModal={toggleSearchAddressModal} />
      </div>
      <SearchAddressModal
        isOpen={isSearchAddressModalOpen}
        onClose={toggleSearchAddressModal}
      />
    </>
  )
}

export default Header
