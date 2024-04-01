import './SiteSection.css'
import classNames from 'classnames';

interface SiteSectionProps {
  sectionData: any,
  userImages: Array<any> | null,
}

function SiteSection({ sectionData, userImages }: SiteSectionProps) {
  const siteSectionClass = classNames('site-section', 'gallery');
  console.log('sectionData', sectionData)
  return (
    <section className={siteSectionClass}>
      {sectionData.label && <h1>{sectionData.label}</h1>}
      <div>
        <p className='section-intro'>{sectionData.textContent}</p>
        {sectionData.id == 0 && userImages && userImages.length ?
          <div className='gallery-display'>
            {userImages.map((image, index) =>
              <div key={image.imageName}>
                <img src={image.url} alt={`image ${index}`} />
              </div>)
            }
          </div>
          :
          <small style={{ fontStyle: 'italic', marginLeft: '2rem', opacity: '0.5' }}></small>
        }
      </div>
    </section>
  )
}

export default SiteSection;