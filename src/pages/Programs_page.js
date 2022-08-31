import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Chooseprogram from '../Program_compo/chooseProgram/Chooseprogram';
import Fat_loss from '../Program_compo/Fat_loss.js/Fat_loss';

const Programs_page = () => {
  return (
    <div>
      <Navbar/>
      <Chooseprogram/>
      <Fat_loss/>
    </div>
  )
}

export default Programs_page
