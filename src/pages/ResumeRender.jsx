import React from 'react';

import Header from '../assets/components/Header.jsx'
import NavBar from '../assets/components/NavBar.jsx'

const ResumeRender = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <iframe 
          src="/Christian_Resume.pdf"
          style={{ width: '1900px', height: '900px' }}
          frameBorder="0"
          title="Resume"
          allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResumeRender;