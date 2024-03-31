import './SiteSection.css'
import classNames from 'classnames';

interface SiteSectionProps {
  sectionData: any,
  userImages: Array<any> | null,
}

function SiteSection({ sectionData, userImages }: SiteSectionProps) {
  const siteSectionClass = classNames('site-section', 'gallery');
  return (
    <section className={siteSectionClass}>
      {sectionData.label && <h1>{sectionData.label}</h1>}
      <div>
        <p className='section-intro'>{sectionData.textContent}</p>
        {userImages ?
          <div className='gallery-display'>
            {userImages.map((image, index) =>
              <div>
                <img src={image.url} alt={`image ${index}`} />
              </div>
            )}
          </div>
          :
          <div>loading...</div>
        }
      </div>
    </section>
  )
}

export default SiteSection;