import React from 'react';
import Carouseel from '../components/carousel/Carouseel';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Chooseprogram from '../Program_compo/chooseProgram/Chooseprogram';
import Fat_loss from '../Program_compo/Fat_loss.js/Fat_loss';

const Programs_page = () => {
  return (
    <div>
      <Navbar/>
      <Chooseprogram/>
      <Fat_loss/>
      <Carouseel/>
      <div className='start-your-health'>Start your health journey with us from today!</div>
      <Footer/>
    </div>
  )
}

export default Programs_page
