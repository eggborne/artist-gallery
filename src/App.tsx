import 'normalize.css';
import './App.css';
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavArea from './components/NavArea';
import DisplayArea from './components/DisplayArea';
import { pause } from './scripts/util';
import { applyCSSValues } from './scripts/db';
import { get, off, onValue, ref } from 'firebase/database';
import { database } from './firebase-config';

const SITE_ID = '13467d21-a3a5-4ba5-88b3-ce98be547f90';

addEventListener('load', async () => {
  await pause(10);
  document.body.classList.add('revealed');
});

const clientContext = location.href.includes('test') ? 'test' : 'prod';

export interface userNavObject {
  id: string;
  label: string;
  href: string;
  handleClickNavItem: (newRoute: string) => void;
}

// these are to come from DB
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
  
  // useEffect(() => {
  //   getPrefs();
  //   if (LIVE && !liveInterval) {
  //     liveInterval = setInterval(getPrefs, 600);
  //   }
  // }, []);

  useEffect(() => {
    const getPreferences = async () => {
      const dbUrl = `preferences/${SITE_ID}/${clientContext}`;
      console.log('calling to', dbUrl);
      const dataRef = ref(database, dbUrl);
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        const nextPrefs = snapshot.val();
        setUserCSSPreferences(nextPrefs);
      } else {
        console.log('No data available at this path');
      }
    }
    getPreferences();
    if (clientContext === 'test') {
      console.log('TEST MODE - subscribing to changes');
      const dbUrl = `preferences/${SITE_ID}/test`;
      const dataRef = ref(database, dbUrl);
      onValue(dataRef, (snapshot) => {
        const nextPrefs = snapshot.val();
        setUserCSSPreferences(nextPrefs);
        return () => off(dataRef);
      });
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
        {clientContext === 'test' && <div className='preview-message'>PREVIEW MODE</div>}
    </>
  )
}

export default App;