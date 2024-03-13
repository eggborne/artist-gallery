import 'normalize.css';
import './App.css';
import { isMobile } from 'react-device-detect';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavArea from './components/NavArea';
import DisplayArea from './components/DisplayArea';


export interface userNavObject {
  id: string;
  label: string;
  href: string;
  handleClickNavItem: (newRoute: string) => void;
}

const userNavItems: Array<userNavObject> = [
  { id: 'nav-0', label: 'gallery', href: 'gallery', handleClickNavItem: () => undefined },
  { id: 'nav-1', label: 'about', href: 'about', handleClickNavItem: () => undefined },
  { id: 'nav-2', label: 'contact', href: 'contact', handleClickNavItem: () => undefined },
];

function App() {
  const [navShowing, setNavShowing] = useState(!isMobile);
  const [pageShowing, setPageShowing] = useState('gallery');

  function toggleNavArea() {
    const current = navShowing;
    setNavShowing(!current);
  }

  function changeNavRoute(newRoute: string) {
    setPageShowing(newRoute);
    toggleNavArea();
  }

  return (
    <>
      <Header hamburgerOpen={isMobile && navShowing} toggleNavArea={toggleNavArea} />
      <main>
        <NavArea handleClickNavItem={changeNavRoute} navItems={userNavItems} pageShowing={pageShowing} visible={navShowing} />
        <DisplayArea pageShowing={pageShowing} />
      </main>
      <Footer />
    </>
  )
}

export default App;
