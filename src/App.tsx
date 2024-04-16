import 'normalize.css';
import './App.css';
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavArea from './components/NavArea';
import DisplayArea from './components/DisplayArea';
import { pause } from './scripts/util';
import { applyCSSValues } from './scripts/util';
import { useDatabaseValue } from './hooks/useDatabaseValue';
import { useDatabaseSubscription } from './hooks/useDatabaseSubscription';
const clientContext = location.href.includes('test') ? 'test' : 'prod';
const SITE_ID = 'rachel-gallery';
const DATABASE_PATH = `sites/${SITE_ID}/userContent/${clientContext}`;

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

function App() {
  const [navShowing, setNavShowing] = useState(!isMobile);
  const [userNavItems, setUserNavItems] = useState({} as any);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [pageShowing, setPageShowing] = useState('0');

  let [userPreferences, loadingPreferences] = useDatabaseValue(DATABASE_PATH, {});
  if (clientContext === 'test') {
    [userPreferences, loadingPreferences] = useDatabaseSubscription(DATABASE_PATH, {});
  }

  useEffect(() => {
    console.error('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> userPrefs changed!');
    const prefsAvailable = userPreferences.cssPreferences && userPreferences.sections
    if (prefsAvailable) {
      document.title = userPreferences.title;
      applyCSSValues(userPreferences.cssPreferences);
      console.table('sections', userPreferences.sections)
      const nextNavItems = [];
      console.log('prefs', userPreferences);
      for (let id in userPreferences.sections) {
        const { label, href, textContent } = userPreferences.sections[id];
        nextNavItems.push({ id, label, href, textContent, handleClickNavItem: changeNavRoute });
      }
      setUserNavItems(nextNavItems);
    }
  }, [userPreferences]);

  useEffect(() => {
    if (!dataLoaded && userNavItems.length) {
      setDataLoaded(true);
    }
  }, [userNavItems]);

  function toggleNavArea() {
    setNavShowing(!navShowing);
  }

  function changeNavRoute(newRoute: number | string) {
    setPageShowing(newRoute as any);
    isMobile && toggleNavArea();
  }

  console.log('app rendering')

  return (
    <>
      <Header hamburgerOpen={navShowing} toggleNavArea={toggleNavArea} />
      <main>
        {dataLoaded &&
          <>
            <NavArea
              handleClickNavItem={changeNavRoute}
              navItems={userNavItems}
              pageShowing={pageShowing}
              visible={navShowing}
            />
          <DisplayArea
            navSectionData={userNavItems.find((item: any) => item.id === pageShowing)}
            userImages={userPreferences.images ? Object.values(userPreferences.images) : []}
            />
          </>
        }
      </main>
      <Footer />
      {clientContext === 'test' && <div className='preview-message'>PREVIEW MODE</div>}
    </>
  )
}

export default App;