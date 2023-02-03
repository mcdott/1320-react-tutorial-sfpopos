import React from 'react'
import './POPOSSpace.css'

function POPOSSpace(props) {
    const { name, image, address, hours } = props
    return (
      <div className='POPOSSpace'>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
          width="300"
          height="300"
          alt="The space"
        />
        <h4 className='POPOSName'>{name}</h4>
        <div>{address}</div>
        <div className='hours'>{hours}</div>
      </div>
    )
  }

export default POPOSSpace