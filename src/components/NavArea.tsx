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

function NavArea(props: NavAreaProps) {
  const { navItems, visible, pageShowing, handleClickNavItem } = props;
  const navAreaClass = classNames('nav-area', { visible });
  return (
    <nav className={navAreaClass}>
      {navItems.map(item =>
        <NavItem handleClickNavItem={handleClickNavItem} key={item.id} highlighted={pageShowing === item.href} id={item.id} label={item.label} href={item.href} />        
      )}
    </nav>
  )
}

export default NavArea;