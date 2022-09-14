import React from "react";
import "./coaches.css";

import data from "./coaches_data";
import ImageCard from "./ImageCard";



const Coaches = (props) => {
  return (
    <div style={{ backgroundColor: `${props.background}`}} className="meet-coaches-section">
      <div style={{color: `${props.headingColor}`, paddingTop: `${props.headingPaddingTop}`}} className="meet-our-coaches">
        {props.heading}
        <div style={{backgroundColor: `${props.headingColor}`}} className="coaches-line"></div>
      </div>
      <div className="square-coaches">
      <img className="square-design" src={props.square} />

      <div className="coach-images-box">
      <div style={{bottom: `${props.bottomImages}`}} className="coaches-image">
        {
            data.map((d)=>{
         
                return <>
                  <ImageCard name={d.name} image={d.img}
                  certification={d.certtification}
                  nameColor={props.nameColor}
                  professionColor={props.professionColor}
                  />
                </>
               })
        }
           </div>
      </div>
      </div>
      
    </div>
  );
};

export default Coaches;
