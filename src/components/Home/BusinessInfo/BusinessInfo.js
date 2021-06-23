import React from 'react'
 import InfoCart from '../InfoCart/InfoCart'
 
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const businessInfo=[
        {
            title:'Opening Hours',
            description:'We are open 7days',
            icon:faClock,
            background:'primary'
        },
        {
            title:'Visit Our Location',
            description:'Dhaka,Bangladesh',
            icon:faMapMarker,
            background:'dark'
        },
        {
            title:'Call us now',
            description:'0170000000',
            icon:faPhone,
            background:'primary'
        }
    ]
    return (
        <section className="d-flex justify-content-center  ">
           <div className="w-75 row      ">
           {
                businessInfo.map(info=><InfoCart info={info} ></InfoCart> )
              
            }
           </div>

        </section>
    )
}

export default BusinessInfo
