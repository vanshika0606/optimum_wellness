import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import About_story from '../About_compo/About_story/About_story'
import Coaches from '../components/Coaches/Coaches'
import Two_coaches from '../About_compo/About_story/Two_coaches'
import square from '../About_compo/images/doctors_square_img.png'
import squaree from '../components/images/square-design.png'
const About = () => {
  return (
    <div>
      <Navbar/>
      <About_story/>
      <Two_coaches/>
      <Coaches heading={"MEET OUR COACHES"} headingColor={'rgb(118, 33, 236)'} square={squaree} background={'white'} nameColor={'rgb(118, 33, 236)'} headingPaddingTop={'0vw'} bottomImages={'-7vw'}  professionColor={'black'}/>
      <Coaches heading={"BOARD OF DOCTORS"} headingColor={'white'} square={square} background={'rgb(118, 33, 236)'} nameColor={'white'} headingPaddingTop={'4vw'} bottomImages={'-4vw'}  professionColor={'white'}/>
    </div>
  )
}

export default About
