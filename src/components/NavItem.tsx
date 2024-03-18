import { useEffect, useState } from 'react';
import './NavItem.css';
import classNames from 'classnames';
import { pause } from '../scripts/util';

interface NavItemProps {
  id: string;
  label: string;
  href: string;
  highlighted: boolean;
  onScreen: boolean;
  handleClickNavItem: (newRoute: string) => void;
}

function NavItem({ id, label, href, highlighted, onScreen, handleClickNavItem }: NavItemProps) {
  const [revealed, setRevealed] = useState(false);
  const navItemClass = classNames('nav-item', { highlighted }, { revealed });
  const delayTime = 200 + (parseInt(id[id.length - 1]) * 100);

  const pauseForAnimation = async () => {
    await pause(delayTime);
    setRevealed(onScreen);
  };
  useEffect(() => {
    pauseForAnimation();
  }); // no dep array means it runs every render

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