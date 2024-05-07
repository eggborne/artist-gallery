import { useState } from 'react';
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
              <div key={seriesSection.series} className='gallery-series'>
                <h2>{seriesSection.series}</h2>
                {seriesSection.images.map(image =>
              <img key={`${image.fileName}-thumbnail`} className='gallery-thumbnail' src={image.thumbnailUrl} alt={image.title} />
            // (<div className='gallery-tile' key={image.fileName}>
            // (<div  key={image.fileName}>
            //   <img className='gallery-thumbnail' src={image.thumbnailUrl} alt={image.title} />
            //   {/* <div className='gallery-tile-info'>
            //     <h2>{image.title}</h2>
            //     <div>{image.description}</div>
            //     <div className='two-column'>
            //       <div>{image.media}</div>
            //       <div>{
              //         `${image.dimensions.width}${image.dimensions.unit === 'in.' ? '"' : image.dimensions.unit} x ${image.dimensions.height}${image.dimensions.unit === 'in.' ? '"' : image.dimensions.unit}`
              //       }</div>
              //     </div>
            //   </div> */}
            // </div>
                  // )
                    )}
              </div>
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