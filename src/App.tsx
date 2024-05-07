import 'normalize.css';
import './App.css';
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavArea from './components/NavArea';
import { pause } from './scripts/util';
import { applyCSSValues } from './scripts/util';
import { useDatabaseValue } from './hooks/useDatabaseValue';
import { useDatabaseSubscription } from './hooks/useDatabaseSubscription';
import SiteSection from './components/SiteSection';
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

export interface imageDataObj {
  description: string;
  dimensions: {
    width: number;
    height: number;
    unit: string;
  };
  extension: string;
  fileName: string;
  media: string;
  series: string;
  size: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  aspectRatio?: Number;
}

function App() {
  const [navShowing, setNavShowing] = useState(!isMobile);
  const [userNavItems, setUserNavItems] = useState({} as any);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [pageShowing, setPageShowing] = useState('0');
  const [imageSectionArray, setImageSectionArray] = useState<{ series: string; images: imageDataObj[] }[]>([]);

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
      const nextNavItems = [];
      console.log('prefs now', userPreferences);
      for (let id in userPreferences.sections) {
        const { label, href, textContent } = userPreferences.sections[id];
        nextNavItems.push({ id, label, href, textContent, handleClickNavItem: changeNavRoute });
      }
      setUserNavItems(nextNavItems);

      const nextImageSectionArray: { series: string; images: any[] }[] = [];
      const seriesNames: string[] = [];
      const userImages = Object.values(userPreferences.images) as imageDataObj[];

      userImages.forEach(imageObj => {
        if (!seriesNames.includes(imageObj.series)) {
          seriesNames.push(imageObj.series);
          nextImageSectionArray.push({
            series: imageObj.series,
            images: [imageObj]
          });
        } else {
          for (let section of nextImageSectionArray) {
            if (section.series === imageObj.series) {
              section.images.push(imageObj);
            }
          }
        }
      });
      setImageSectionArray(nextImageSectionArray);
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
          <div className='display-area'>
            <SiteSection
              sectionData={userNavItems.find((item: any) => item.id === pageShowing)}
              imageSectionArray={imageSectionArray}
              userImages={userPreferences.images ? Object.values(userPreferences.images) : []}
            />
          </div>
          </>
        }
      </main>
      <Footer />
      {clientContext === 'test' && <div className='preview-message'>PREVIEW MODE</div>}
    </>
  )
}

export default App;