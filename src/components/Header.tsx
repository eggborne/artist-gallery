import Hamburger from './Hamburger';
import './Header.css'
import headerSVG from '../assets/rrg_header.svg';

interface HeaderProps {
  hamburgerOpen: boolean,
  toggleNavArea: () => void;
}

function Header({ hamburgerOpen, toggleNavArea }: HeaderProps) {
  return (
    <header>
      <Hamburger handleClick={toggleNavArea} open={hamburgerOpen} />
      <img id='header-image' src={headerSVG} />
    </header>
  )
}

export default Header;