import React from "react";
import "./coaches.css";
import square from '../images/square-design.png';
import data from "./coaches_data";
import ImageCard from "./ImageCard";
import cover from '../images/fb,youtube,linkdin_cover.png';
import news from '../images/news.png';
import last from '../images/last.png'

const Coaches = () => {
  return (
    <div className="meet-coaches-section">
      <div className="meet-our-coaches">
        MEET OUR COACHES
        <div className="coaches-line"></div>
      </div>
      <div className="square-coaches">
      <img className="square-design" src={square} />

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
      <div className="join-on-facebook">
       Join Us On <span className="facebook">Facebook</span>

       <img className="cover" src={cover}/>

       <div className="news">
            In The News
       </div>
       <img src={news} className="news-images" />
       
      </div>
    </div>
  );
};

export default Coaches;
