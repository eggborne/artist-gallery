import 'normalize.css';
import './App.css';
import { isMobile } from 'react-device-detect';

// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';

// import { applyCSSValues, defaultCSSPreferences, getCurrentCSSValues, getUserPreferences, userCSSPreferences } from './scripts/db';

import Header from './components/Header';
import Footer from './components/Footer';
import NavArea from './components/NavArea';
import DisplayArea from './components/DisplayArea';
import { pause } from './scripts/util';
import { applyCSSValues, defaultCSSPreferences, getUserPreferences } from './scripts/db';

addEventListener('load', async () => {
  await pause(10);
  document.body.classList.add('revealed');
});

export interface userNavObject {
  id: string;
  label: string;
  href: string;
  handleClickNavItem: (newRoute: string) => void;
}

// these are to come from DB!
const userNavItems: Array<userNavObject> = [
  { id: 'nav-0', label: 'gallery', href: 'gallery', handleClickNavItem: () => undefined },
  { id: 'nav-1', label: 'about', href: 'about', handleClickNavItem: () => undefined },
  { id: 'nav-2', label: 'contact', href: 'contact', handleClickNavItem: () => undefined },
  { id: 'nav-3', label: 'admin', href: 'admin', handleClickNavItem: () => undefined },
];

function App() {
  const [navShowing, setNavShowing] = useState(!isMobile);
  const [userCSSPreferences, setUserCSSPreferences] = useState({});
  const [pageShowing, setPageShowing] = useState('gallery');
  const [busyFetching, setBusyFetching] = useState(false);

  async function getPrefs() {
    if (!busyFetching) {
      setBusyFetching(true);
      const userCSSPreferences = await getUserPreferences('1');
      setUserCSSPreferences(userCSSPreferences);
      setBusyFetching(false);
    } else {
      console.warn('---------- DID NOT FETCH DUE TO STILL BUSY!')
    }
  }
  useEffect(() => {
    // getPrefs();
    if (location.href.includes('live')) {
      setInterval(getPrefs, 500);
    }
  }, []);

  useEffect(() => {
    applyCSSValues(userCSSPreferences);
  }, [userCSSPreferences])

  function toggleNavArea() {
    console.log('toggled nav')
    setNavShowing(!navShowing);
  }

  function changeNavRoute(newRoute: string) {
    setPageShowing(newRoute);
    isMobile && toggleNavArea();
  }

  return (
    <>
      <Header hamburgerOpen={navShowing} toggleNavArea={toggleNavArea} />
      <main>
        <NavArea handleClickNavItem={changeNavRoute} navItems={userNavItems} pageShowing={pageShowing} visible={navShowing} />
        <DisplayArea pageShowing={pageShowing} />
      </main>
      <Footer />
    </>
  )
}

export default App;