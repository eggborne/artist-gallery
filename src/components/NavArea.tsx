import { userNavObject } from '../App';
import './NavArea.css';
import classNames from 'classnames';
import NavItem from './NavItem';

interface NavAreaProps {
  navItems: Array<userNavObject>;
  visible: boolean;
  pageShowing: string;
  handleClickNavItem: (newRoute: string) => void
}

function NavArea({ navItems, visible, pageShowing, handleClickNavItem }: NavAreaProps) {
  const navAreaClass = classNames('nav-area', { visible });
  return (
    <nav className={navAreaClass}>
      {navItems.map(({ id, label, href }) =>
        <NavItem handleClickNavItem={handleClickNavItem} onScreen={ visible } key={id} highlighted={pageShowing === id} id={id} label={label} href={href} />        
      )}
    </nav>
  )
}

export default NavArea;