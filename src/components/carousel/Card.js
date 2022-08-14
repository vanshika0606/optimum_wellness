import React from 'react';
import quote_1 from '../images/quote_1.png';
import quote_2 from '../images/quote_2.png';

const Card = (props) => {
  return (
    <div className='card' >
      <img src={props.image} 
      />
      <div className='success-stories'>
        <h2>SUCCESS STORIES</h2>
        <img className="quote_1" src={quote_1} />
       <p>{props.story}</p>
       <img className="quote_2" src={quote_2} />
      </div>
      
    </div>
  )
}

export default Card
