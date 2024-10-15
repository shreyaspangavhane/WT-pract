import React from 'react';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';

function MainSection({ page }) {
  
  
    if (page === 'Home') {
    return <div className='MainSection'> <Home /></div>;
  } else {
    return <div className='MainSection'> <AboutUs /></div>;
  }
}

export default MainSection;
