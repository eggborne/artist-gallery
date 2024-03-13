import About from './About';
import Contact from './Contact';
import './DisplayArea.css'
import Gallery from './Gallery';

interface DisplayAreaProps {
  pageShowing: string,
}

function DisplayArea({ pageShowing }: DisplayAreaProps) {
  return (
    <div className='display-area'>
      {
        pageShowing === 'gallery' ?
          <Gallery />
          :
        pageShowing === 'about' ?
          <About />
          :
        pageShowing === 'contact' ?
          <Contact />
          :
          <p>no nav clicked</p>
      }
    </div>
  )
}

export default DisplayArea;