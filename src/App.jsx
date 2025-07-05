import React from 'react';
import Header from './assets/components/Header.jsx';
import NavBar from './assets/components/NavBar.jsx';
import SocialBar from './assets/components/SocialBar.jsx';

// Text Components Import
import ShinyText from './assets/components/TxtComp/ShinyText.jsx';

// Background Components Import
import Iridescence from './assets/components/BkgComp/Iridescence.jsx';
  


import './App.css';



/*
react components start  with an uppercase
and elements start with a lowercase
*/

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <h1>
        <ShinyText
          text="Craig Johnson and Christian Walker"
          disabled={false}
          speed={3}
          className=""
          style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
        />
      </h1>

      <h3>Developer |  Programmer | Software Engineer | Athlete | Gamer | Musician</h3>
      <div id="containerOne"><SocialBar /></div>
    </>
  );
};

export default App;
