import './Contact.css'
import classNames from 'classnames';

// interface aboutProps {
  // pageShowing: string,
// }

function Contact() {
  const contactClass = classNames('site-section', 'contact')
  return (
    <div className={contactClass}>
      This is the Contact section 
    </div>
  )
}

export default Contact;