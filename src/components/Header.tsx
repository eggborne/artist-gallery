import Hamburger from './Hamburger';
import './Header.css'
import headerSVG from '../assets/rrg_header.svg';

interface HeaderProps {
  hamburgerOpen: boolean,
  toggleNavArea: () => void;
}

function Header(props: HeaderProps) {
  return (
    <header>
      <Hamburger handleClick={props.toggleNavArea} open={props.hamburgerOpen} />
      {/* <h1 className='header-legend'>
      </h1> */}
      <img id='header-image' src={headerSVG} />
      <div className='header-description'></div>
    </header>
  )
}

export default Header;