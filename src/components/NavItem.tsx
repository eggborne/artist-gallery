import './NavItem.css';
import classNames from 'classnames';

interface NavItemProps {
  id: string;
  label: string;
  href: string;
  highlighted: boolean;
  handleClickNavItem: (newRoute: string) => void;
}

function NavItem(props: NavItemProps) {
  const { id, label, href, highlighted, handleClickNavItem } = props;
  const navItemClass = classNames('nav-item', { highlighted });

  function onClickNavItem() {
    handleClickNavItem(href);
  }

  return (
    <a onClick={onClickNavItem} id={id} className={navItemClass}>
      {label}
    </a>
  )
}

export default NavItem;