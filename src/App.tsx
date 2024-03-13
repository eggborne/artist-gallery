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
}

const userNavItems:Array<userNavObject> = [
  { id: 'nav-0', label: 'gallery', href: '/' },
  { id: 'nav-1', label: 'about', href: '/about' },
  { id: 'nav-1', label: 'contact', href: '/gallery' },
];

function App() {
  const [navShowing, setNavShowing] = useState(!isMobile);
  const [pageShowing, setPageShowing] = useState('gallery');

  function toggleNavArea() {
    const current = navShowing;
    setNavShowing(!current);
  }

  return (
    <>
      <Header hamburgerOpen={isMobile && navShowing} toggleNavArea={toggleNavArea} />
      <main>
        <NavArea navItems={ userNavItems } showing={navShowing} />
        <DisplayArea pageShowing={pageShowing} />
      </main>
      <Footer />
    </>
  )
}

export default App;
