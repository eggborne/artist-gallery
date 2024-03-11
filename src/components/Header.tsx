import Hamburger from './Hamburger';
import './Header.css'

interface HeaderProps {
  hamburgerVisible: boolean,
  hamburgerOpen: boolean,
  toggleNavArea: () => void;
}

function Header(props: HeaderProps) {
  
  return (
    <header>
      {/* {props.hamburgerVisible && */}
        <Hamburger handleClick={props.toggleNavArea} open={props.hamburgerOpen} />
      {/* } */}
      <h1 className='header-legend'>
        Gallery Title
      </h1>
      <div className='header-description'>A short description of a few words</div>
    </header>
  )
}

export default Header;