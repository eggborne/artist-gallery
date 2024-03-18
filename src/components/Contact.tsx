import './Contact.css'
import classNames from 'classnames';

// interface aboutProps {
  // pageShowing: string,
// }

function Contact() {
  const contactClass = classNames('site-section', 'contact')
  return (
    <div className={contactClass}>
      <h1>Larger Text</h1>
      <div>
        <p>Gratitude, dear wanderer, for drifting into our whimsical whirl. Here, every squiggle tells a tale, every shade shares a smile. May your journey through our corridors of quirk leave you light-hearted, buoyant, and brimming with bumblesnort. Remember, in the grand tapestry of existence, the loom of laughter weaves the most luminous threads.</p>
      </div>
    </div>
  )
}

export default Contact;