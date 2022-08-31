import React from 'react'
import nutrition from '../images/nutrition.png';
import exercise from '../images/exercise.png';
import rest from '../images/rest.png';
import './method.css';

const Methodology = () => {
  return (
    
      <div className='methodology'>
        <h1>Our Methodology</h1>
        <h3>THE 3 POINT APPROACH</h3>
        <p> Our team at Optimum Wellness believes that a holistic approach is the best way to achieve overall physical, nutritional, and mental well-being. Using a three-point approach: nutrition, exercise, and rest, Optimum Wellness offers personalized, effective solutions for every individual. Rooted in science and with over a decade of industry experience, we have unparalleled knowledge of what it takes to help you achieve your goals optimally.</p>

        <div className='three-methodology'>
            <div className='nutrition'>
                <img src={nutrition}/>
                <h3>Quantified Nutrition</h3>
                <p>Experience the transformative power of scientific nutrition combined with sustainable food choices.</p>

            </div>
            <div className='exercise'>
                <img src={exercise}/>
                <h3>Result-Oriented Exercise</h3>
                <p>From simple daily activities to intense workouts, our exercise guidance helps you feel better and live healthier. </p>

            </div>
            <div className='rest'>
                <img src={rest}/>
                <h3>Appropriate Rest</h3>
                <p>We empower you to utilise the fundamental impact of rest and recovery for your well-being.
</p>

            </div>
        </div>
      </div>
    
  )
}

export default Methodology
