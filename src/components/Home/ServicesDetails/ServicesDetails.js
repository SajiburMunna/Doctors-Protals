import React, { useState } from 'react'
import { Card,CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
 
const ServicesDetails = ({ser}) => {
  console.log(ser);
   
    
    
    
    return (
         <CardGroup>

<Card  style={{height:"300px",width:"300px",margin:"10px"}} >
    <Card.Img  style={{height:"100px",width:"150px", marginLeft:"70px",padding:"10px"}}  variant="top" src= {ser.img}/>
    <Card.Body>
      <Card.Title>{ser.name}</Card.Title>
      <Card.Text>
         {ser.description}
      </Card.Text>
    </Card.Body>
    
  </Card>
         </CardGroup>
    )
}

export default ServicesDetails
