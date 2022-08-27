import React from 'react';

import Carousel from '../components/carousel/Carouseel';
import Coaches from '../components/Coaches/Coaches';
import Methodology from '../components/Methodology/Methodology';
import Navbar from '../components/Navbar/Navbar.js';
import Steps from '../components/steps/Steps';
import UnderNavbar from '../components/UnderNavbar/UnderNavbar.js';
import Footer from '../components/footer/Footer.js';


const Home_page = () => {
  return (
    <div>
      <Navbar/>
      <UnderNavbar/>
      <Methodology/>
      <Steps/>
      <Carousel/>
      <Coaches/>
      <Footer/>
    </div>
  )
}

export default Home_page
