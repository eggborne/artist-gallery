import './SiteSection.css'
import classNames from 'classnames';

interface SiteSectionProps {
  sectionData: any,
  imageSectionArray: { series: string; images: any[] }[],
  userImages: Array<any> | null,
}

function SiteSection({ sectionData, imageSectionArray, userImages }: SiteSectionProps) {

  const siteSectionClass = classNames('site-section', 'gallery');
  console.log('sectionData', sectionData);
  return (
    <section className={siteSectionClass}>
      {sectionData.label && <h1>{sectionData.label}</h1>}
      <div>
        {sectionData.id == 0 && userImages && userImages.length ?
          <div className='gallery-display'>
            {imageSectionArray.map(seriesSection =>
              <>
                <h2>{seriesSection.series}</h2>
                <div key={seriesSection.series} className='gallery-series'>
                  {seriesSection.images.map(image =>
                    <img key={`${image.fileName}-thumbnail`} className='gallery-thumbnail' src={image.thumbnailUrl} alt={image.title} />
                  )}
                </div>
              </>
            )}
          </div>
          :
          null
        }
        <p className='section-intro'>{sectionData.textContent}</p>
      </div>
    </section>
  )
}

export default SiteSection;