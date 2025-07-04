import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '/github-mark-white.png';
import instagramLogo from '/Instagram_Glyph_White.png';
import linkedinLogo from '/InBug-White.png';
import gmailLogo from '/Gmail_Logo_White.svg';


import './SocialBar.css';

const SocialBar = () => {
  return (
    <div id="social">

        <a href="https://vite.dev" target="_blank">
            <img src={githubLogo} className="logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={instagramLogo} className="logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={linkedinLogo} className="logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={gmailLogo} className="logo" />
        </a>
    </div>
  );
};

export default SocialBar;
