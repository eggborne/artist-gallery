import './NavArea.css';
import classNames from 'classnames';

interface NavAreaProps {
  showing: boolean;
}

function NavArea(props: NavAreaProps) {
  const { showing } = props;
  const navAreaClass = classNames('nav-area', { showing })
  return (
    <nav className={navAreaClass}>
      <a href="/#" className='nav-item'>Nav Link</a>
      <a href="/#" className='nav-item'>Other Nav Link</a>
      <a href="/#" className='nav-item'>Another Nav Link</a>
      <a href="/#" className='nav-item'>Nav Link With a Longer Title</a>
      <a href="/#" className='nav-item'>Nav Link</a>
    </nav>
  )
}

export default NavArea;