import React from 'react';

import Carousel from '../components/carousel/Carouseel';
import Coaches from '../components/Coaches/Coaches';
import Methodology from '../components/Methodology/Methodology';
import Navbar from '../components/Navbar/Navbar.js';
import Steps from '../components/steps/Steps';
import UnderNavbar from '../components/UnderNavbar/UnderNavbar.js';
import Footer from '../components/footer/Footer.js';
import Join_Us from '../components/Coaches/Join_Us';

import square from '../components/images/square-design.png';


const Home_page = () => {
  return (
    <div className='home'>
      <Navbar/>
      <UnderNavbar/>
      <Methodology/>
      <Steps/>
      <Carousel/>
      <Coaches heading={"MEET OUR COACHES"} headingColor={'rgb(118, 33, 236)'} square={square} background={'white'} nameColor={'rgb(118, 33, 236)'}  bottomImages={'-7vw'} headingPaddingTop={'0vw'} professionColor={'black'}/>
      <Join_Us/>
      <Footer/>
    </div>
  )
}

export default Home_page
