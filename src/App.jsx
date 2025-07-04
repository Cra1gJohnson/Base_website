import React from 'react';
import Header from './assets/components/Header.jsx';
import NavBar from './assets/components/NavBar.jsx';
import SocialBar from './assets/components/SocialBar.jsx';
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

      <h1>Craig Johnson and Christian Walker</h1>
      <div id="containerOne"><SocialBar /></div>
    </>
  );
};

export default App;
