import React from 'react';
import cover from '../images/fb,youtube,linkdin_cover.png';
import news from '../images/news.png';
import './coaches.css'

const Join_Us = () => {
  return (
    <div className='join-us'>
      <div className="join-on-facebook">
       Join Us On <span className="facebook">Facebook</span>

       <img className="cover" src={cover}/>

       <div className="news">
            In The News
       </div>
       <img src={news} className="news-images" />
       
      </div>
    </div>
  )
}

export default Join_Us
