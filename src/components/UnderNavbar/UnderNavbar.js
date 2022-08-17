import React from "react";
import "./underNavbar.css";
import img1 from '../images/exercise_1.png';
import img2 from '../images/exercise_2.png';
import img3 from '../images/exercise_3.png';
import img4 from '../images/exercise_4.png';


const UnderNavbar = () => {
  return (
    <div className="under-navbar">
      
      
    
      <div className="small-purple-circle first-circle"></div>
              <div className="small-purple-circle second-circle"></div>
      
      <div className="half-ellipse">
      
        <div className="circle-in-center">
      
          <div className="grey-circle">
            <div className="grey-line-circle">
            
              

              <div className="white-circle">
                
                <h2 id="one-stop">One Stop</h2>
                <h1 id="solutions">Solution</h1>
                <h2 className="for-all">For All Yours</h2>
                <p id="wellness">Wellness</p>
                <h2 className="for-all">Goals</h2>
                
              </div>
            </div>
          </div>
          
        </div>
      
      </div>
      <img src={img1} className="img1"/>
      <img src={img2} className="img2"/>
      <img src={img3} className="img3"/>
      <img src={img4} className="img4"/>
     
    </div>
  );
  
};

export default UnderNavbar;

