import './SiteSection.css'
import classNames from 'classnames';

interface SiteSectionProps {
  sectionData: any,
  userImages: Array<any> | null,
}

function SiteSection({ sectionData, userImages }: SiteSectionProps) {
  const siteSectionClass = classNames('site-section', 'gallery');
  console.log('sectionData', sectionData);
  console.log('userImages', userImages);
  return (
    <section className={siteSectionClass}>
      {sectionData.label && <h1>{sectionData.label}</h1>}
      <div>
        <p className='section-intro'>{sectionData.textContent}</p>
        {sectionData.id == 0 && userImages && userImages.length ?
          <div className='gallery-display'>
            {userImages.map((image, index) =>
            (<div className='gallery-tile' key={image.fileName}>
              <img src={image.url} alt={image.title} />
              <div className='gallery-tile-info'>
                <h2>{image.title}</h2>
                <div>{image.description}</div>
                <div className='two-column'>
                  <div>{image.media}</div>
                  <div>{
                    `${image.dimensions.width}${image.dimensions.unit === 'in.' ? '"' : image.dimensions.unit} x ${image.dimensions.height}${image.dimensions.unit === 'in.' ? '"' : image.dimensions.unit}`
                  }</div>
                </div>
              </div>
            </div>
            ))}
          </div>
          :
          <small style={{ fontStyle: 'italic', marginLeft: '2rem', opacity: '0.5' }}>no images</small>
        }
      </div>
    </section>
  )
}

export default SiteSection;