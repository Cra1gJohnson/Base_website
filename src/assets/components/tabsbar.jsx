import React from 'react';
import { Link } from 'react-router-dom';
import './tabsbar.css';

const TabsBar = () => {
    return (
        <div className="tabs-bar">
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
            </Link>
        </div>
    );
};

export default TabsBar;