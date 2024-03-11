import './App.css';
import { isMobile } from 'react-device-detect';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavArea from './components/NavArea';
import DisplayArea from './components/DisplayArea';

function App() {
  const [navShowing, setNavShowing] = useState(false);
  const [pageShowing, setPageShowing] = useState('gallery');

  function toggleNavArea() {
    console.log('clicked nav')
    const current = navShowing;
    setNavShowing(!current);
  }

  return (
    <>
      <Header hamburgerVisible={isMobile} hamburgerOpen={navShowing} toggleNavArea={toggleNavArea} />
      <main>
        <NavArea showing={navShowing} />
        <DisplayArea />
      </main>
      <Footer />
    </>
  )
}

export default App;
