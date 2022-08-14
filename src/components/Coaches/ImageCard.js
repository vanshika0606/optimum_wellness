import React from 'react';
import './coaches.css';


const ImageCard = (props) => {
  return (
    <div className='image-card'>
        <img src={props.image} />
        <h4>{props.name}</h4>
        <p>{props.certification}</p>
      
    </div>
  )
}

export default ImageCard
