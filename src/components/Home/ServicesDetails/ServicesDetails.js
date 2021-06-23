import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  import s1 from '../../../images/s1.png'
 import s2 from '../../../images/s2.png'
 import s3 from '../../../images/s3.png'
 
const ServicesDetails = ({ser}) => {
  console.log(ser);
   
    
    
    
    return (
        <div>
           <Carousel>
           <Carousel.Item>
    <img
      className="   "
      src= {ser.img}
      alt=" "
    />
    <Carousel.Caption>
      <h3 style={{color:'red'}}>{ser.name}</h3>
      <p  style={{color:'red'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
      </Carousel.Item>

  
    
           </Carousel>
        </div>
    )
}

export default ServicesDetails
