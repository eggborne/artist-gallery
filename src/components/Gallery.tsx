import './Gallery.css'
import classNames from 'classnames';

// interface GalleryProps {
  // pageShowing: string,
// }

function Gallery() {
  const galleryClass = classNames('site-section', 'gallery')
  return (
    <div className={galleryClass}>
      This is the gallery 
    </div>
  )
}

export default Gallery;