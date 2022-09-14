import React from 'react';
import './coaches.css';


const ImageCard = (props) => {
  return (
    <div className='image-card'>
        <img src={props.image} />
        <h4 style={{color:`${props.nameColor}`}}>{props.name}</h4>
        <p style={{color:`${props.professionColor}`}}>{props.certification}</p>
      
    </div>
  )
}

export default ImageCard
