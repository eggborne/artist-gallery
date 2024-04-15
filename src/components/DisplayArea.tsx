import './DisplayArea.css'
import SiteSection from './SiteSection';

interface DisplayAreaProps {
  navSectionData: any,
  userImages: Array<object>,
}

function DisplayArea({ navSectionData, userImages }: DisplayAreaProps) {
  console.log('SiteSection userImages', userImages)
  return (
    <div className='display-area'>
      <SiteSection
        sectionData={navSectionData}
        userImages={userImages}
      />
    </div>
  )
}

export default DisplayArea;