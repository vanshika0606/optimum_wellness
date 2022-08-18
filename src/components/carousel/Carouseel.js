import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './carousel.css';
import data from './carousel_data';
import Card from './Card';

const Carouseel = () => {
  

  return (
    <div className='carousel'>
      
      <Carousel

indicatorIcon= {{
 
  
  
}
}

indicatorIconButtonProps={{
  style: {
    
    margin: '0.25vw',
    padding: '0.2vw', 
    color:'#D9D9D9'  ,  
     backgroundColor: '#D9D9D9'      
  }
}}
activeIndicatorIconButtonProps={{
  style: {
      
      color: '#7621EC' 
     
  }
}}




       autoPlay={true}
       animation="slide"
       
       navButtonsAlwaysInvisible={true}
       interval="3000"
       stopAutoPlayOnHover={false}
      
      >
      {
       data.map((d)=>{
         
        return <>
          <Card key={d.id} story={d.story} image={d.image}
          />
        </>
       })
      }
        </Carousel>
        
      
    </div>
  )
}



export default Carouseel
