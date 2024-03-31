import './DisplayArea.css'
import SiteSection from './SiteSection';

interface DisplayAreaProps {
  navItems: Array<any>,
  userImages: Array<object>,
  pageShowing: string,
}

function DisplayArea({ navItems, pageShowing, userImages }: DisplayAreaProps) {
  return (
    <div className='display-area'>
      <SiteSection
        sectionData={navItems.filter(item => item.label === pageShowing)[0]}
        userImages={pageShowing === 'gallery' ? userImages : null}
      />
    </div>
  )
}

export default DisplayArea;