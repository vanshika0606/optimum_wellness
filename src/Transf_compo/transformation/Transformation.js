import React from 'react'
import './trans.css'
import data from '../transformation/trans-data.js'

const Transformation = () => {
  return (
    <div className='trans'>
      <h2 className='tran-stories'>Transformation Stories</h2>
      <div className='trans-grid' >
       
      { data.map((d)=>{
          return <>
          <img src={d.image} key={d.id} className="trans-img"/>
          </>
      })
}

      </div>
    </div>
  )
}

export default Transformation
