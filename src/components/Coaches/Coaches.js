import React from "react";
import "./coaches.css";
import square from '../images/square-design.png';
import data from "./coaches_data";
import ImageCard from "./ImageCard";



const Coaches = () => {
  return (
    <div className="meet-coaches-section">
      <div className="meet-our-coaches">
        MEET OUR COACHES
        <div className="coaches-line"></div>
      </div>
      <div className="square-coaches">
      <img className="square-design" src={square} />

      <div className="coach-images-box">
      <div className="coaches-image">
        {
            data.map((d)=>{
         
                return <>
                  <ImageCard name={d.name} image={d.img}
                  certification={d.certtification}
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
