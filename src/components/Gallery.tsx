import './Gallery.css'
import classNames from 'classnames';

// interface GalleryProps {
  // pageShowing: string,
// }

function Gallery() {
  const galleryClass = classNames('site-section', 'gallery')
  return (
    <div className={galleryClass}>
      <h1>Larger Text</h1>
      <div>
        <p>Velit squibble bonkers flibbertigibbet, conoodle artisizzle fizzle pop. Whooziwhatsit colorburst twizzle floof, gallery wanderlust in snickerdoodle dreamscapes. Zippity zap, globtrot squigglemorphs and doodlewhackers, bravely prance in kaleidoscope whispers.</p>
        <p>Twiddlemuffins and chucklefluff, serendipity doodles in zany zooms. Piffle paffle, lumptious delight, where splendiferous whimsy frolics and capers. Bloopity bloop, artiscapes twirl in gigglemirth, tickle the cosmos with a spork.</p>
        {/* <p>Flufflebound in snazzle dazzle, boopity boop with a side of whimsy whamsy. Each masterpiece a ticklish enigma, a snorfle in the universal gigglefit. Welcome, oh seeker of the squizzle squazzle, to our gallery of splish splash and marvelous muddle.</p> */}
      </div>
    </div>
  )
}

export default Gallery;