import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCart.css'
const InfoCart = ({info}) => {
     
    return (
        <div className="col-md-4  ">

            <div className={`d-flex justify-content-center  rounded mt-1   info-container info-${info.background}`}>
            <div><FontAwesomeIcon icon={info.icon}></FontAwesomeIcon></div>
            <div>
            
                <h6>{info.title}</h6>
                <small>{info.description}</small>

            </div>
            </div>

           
            
        </div>
    )
}

export default InfoCart
