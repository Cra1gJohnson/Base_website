import React from 'react';
import { Link } from 'react-router-dom';
import './TabsBar.css';

function TabsBar({ setActiveTab }) {
    return (
        <div className="tabs-bar">
            <button onClick={() => setActiveTab('home')}>Home</button>
            <button onClick={() => setActiveTab('about')}>About</button>
            <button onClick={() => setActiveTab('experience')}>Experience</button>
            <button onClick={() => setActiveTab('projects')}>Projects</button>
        </div>
    );
};

export default TabsBar;
/* 
           <Link to='/'>
                <text className='tabs-link'>Home</text>
            </Link>
            <Link to='/about'>
                <text className='tabs-link'>About</text>
            </Link>
            <Link to='/experience'>
                <text className='tabs-link'>Experience</text>
            </Link>
            <div className='active-tab'/>
            <Link to='/projects'>
                <text className='tabs-link'>Projects</text>
            </Link> */