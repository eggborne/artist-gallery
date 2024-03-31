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
import { get, off, onValue, ref } from 'firebase/database';
import { getDownloadURL, list, ref as storageRef } from 'firebase/storage';
import { database, storage } from './firebase-config';

const SITE_ID = 'rachel-gallery';

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

function App() {
  const [navShowing, setNavShowing] = useState(!isMobile);
  const [userPreferences, setUserPreferences] = useState({} as any);
  const [userImages, setUserImages] = useState([] as any);
  const [userNavItems, setUserNavItems] = useState({} as any);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [pageShowing, setPageShowing] = useState('gallery');

  const getImageArray = async (siteImages: any) => {
    const imagesRef = storageRef(storage, 'sites/' + SITE_ID + '/images');
    const urls: object[] = [];
    for (const image of siteImages) {
      const imageRef = storageRef(imagesRef, image.name);
      const url = await getDownloadURL(imageRef);
      urls.push({ url, imageName: image.name, size: image.size });
    }
    return urls;
  };

  useEffect(() => {
    const getPreferences = async () => {
      const dbUrl = `sites/${SITE_ID}/${clientContext}`;
      const dataRef = ref(database, dbUrl);
      try {
        const snapshot = await get(dataRef);
        const nextPrefs = snapshot.val();
        if (clientContext === 'test') {
          const dbUrl = `sites/${SITE_ID}/test`;
          const dataRef = ref(database, dbUrl);
          onValue(dataRef, (snapshot) => {
            const nextPrefs = snapshot.val();
            setUserPreferences(nextPrefs);
            return () => off(dataRef);
          });
        }
        setUserPreferences(nextPrefs);
        const nextNavItems = [];
        for (let id in nextPrefs.sections) {
          const { label, href, textContent } = nextPrefs.sections[id];
          nextNavItems.push({ id, label, href, textContent, handleClickNavItem: changeNavRoute});
        }
        setUserNavItems(nextNavItems);
        setDataLoaded(true);
      } catch (error) {
        console.error('error getting preferences', error);
      }
    }
    getPreferences();
    const listRef = storageRef(storage, 'sites/' + SITE_ID + '/images');
    list(listRef).then(async result => {
      const newImages = await getImageArray(result.items);
      setUserImages(newImages);
    });
  }, []);
    


  useEffect(() => {
    applyCSSValues(userPreferences);
  }, [userPreferences])

  function toggleNavArea() {
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
        {dataLoaded && 
        <>
          <NavArea handleClickNavItem={changeNavRoute} navItems={userNavItems} pageShowing={pageShowing} visible={navShowing} />
          <DisplayArea navItems={userNavItems} userImages={userImages} pageShowing={pageShowing} />
        </>
        }
      </main>
      <Footer />
        {clientContext === 'test' && <div className='preview-message'>PREVIEW MODE</div>}
    </>
  )
}

export default App;