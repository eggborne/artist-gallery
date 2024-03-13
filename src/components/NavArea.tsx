import { userNavObject } from '../App';
import './NavArea.css';
import classNames from 'classnames';
import NavItem from './NavItem';

interface NavAreaProps {
  navItems: Array<userNavObject>;
  showing: boolean;
}

function NavArea(props: NavAreaProps) {
  const { navItems, showing } = props;
  const navAreaClass = classNames('nav-area', { showing })
  return (
    <nav className={navAreaClass}>
      {navItems.map(item =>
        <NavItem id={item.id} label={item.label} href={item.href} />        
      )}
    </nav>
  )
}

export default NavArea;