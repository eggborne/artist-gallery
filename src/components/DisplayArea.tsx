import './DisplayArea.css'
import SiteSection from './SiteSection';

interface DisplayAreaProps {
  navItems: Array<any>,
  userImages: Array<object>,
  pageShowing: string,
}

function DisplayArea({ navItems, pageShowing, userImages }: DisplayAreaProps) {
  console.log('SiteSection userImages', userImages)
  return (
    <div className='display-area'>
      <SiteSection
        sectionData={navItems.filter(item => item.id == pageShowing)[0]}
        userImages={userImages}
      />
    </div>
  )
}

export default DisplayArea;