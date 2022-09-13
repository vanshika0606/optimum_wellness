import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import About_story from '../About_compo/About_story/About_story'

import Coaches from '../components/Coaches/Coaches'
import Two_coaches from '../About_compo/About_story/Two_coaches'
const About = () => {
  return (
    <div>
      <Navbar/>
      <About_story/>
      <Two_coaches/>
      <Coaches/>
    </div>
  )
}

export default About
