import './NavItem.css';
import classNames from 'classnames';

export interface NavItemProps {
  id: string;
  label: string;
  href: string;
}

function NavItem(props: NavItemProps) {
  const { id, label, href } = props;
  const navItemClass = classNames('nav-item')
  return (
    <a id={id} href={href} className={navItemClass}>
      {label}
    </a>
  )
}

export default NavItem;