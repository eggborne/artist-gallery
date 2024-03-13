import './About.css'
import classNames from 'classnames';

// interface aboutProps {
  // pageShowing: string,
// }

function About() {
  const aboutClass = classNames('site-section', 'about')
  return (
    <div className={aboutClass}>
      This is the About section 
    </div>
  )
}

export default About;