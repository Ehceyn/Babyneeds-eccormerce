import React from 'react';
import Navbar from './Navbar.jsx';
import Heading from './Heading.jsx';
import {Grid1, Grid2, Grid3} from './AllGrids/Grids.jsx';
import HeadAd from './Adboards/HeadAd.jsx';
import BodyAd from './Adboards/BodyAd.jsx';
import Footer from './Footer.jsx';

import digitalbg8 from './images/digitalbg8.jpg';


function App() {
  return (
    <div>
    <HeadAd/>
    <Navbar/>
    <Heading/>
    <div id='side'>
      <ul>
        <li>m</li>
        <li>m</li>
        <li>m</li>
      </ul>
    </div>
    <Grid1/>
    <BodyAd ad={digitalbg8}/>
    <Grid2/>
    <BodyAd/>
    <Grid3/>
    <Footer/>
    </div>
  );
}

export default App;
