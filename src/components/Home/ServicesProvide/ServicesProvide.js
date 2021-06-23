import React from 'react'
import ServicesDetails from '../ServicesDetails/ServicesDetails'
 import s1 from '../../../images/s1.png'
 import s2 from '../../../images/s2.png'
 import s3 from '../../../images/s3.png'
 import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesProvide = () => {

    const services=[
        {
            img:s1,
            name:'Fluoride Treatment',
            despription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ab cum eveniet repudiandae, possimus natus blanditiis corrupti doloremque est quibusdam a dolorem modi? '
        },
        {
            img:s2,
            name:'Cavity Filling',
            despription:'ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ab cum eveniet repudiandae, possimus natus blanditiis corrupti doloremque est quibusdam'

        },
        {
            img:s3,
            name:'Teath Filling',
            despription:'ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ab cum eveniet repudiandae, possimus natus blanditiis corrupti doloremque est quibusdam'

        }
    ]

    return (
        <section>
            <div className="text-center">
                <h5 style={{color:'#1CC7C1'}}> Our Services </h5>
                <h2>Services We Provider</h2>

            </div>
            {
                services.map((ser)=><ServicesDetails ser={ser} >


 
                </ServicesDetails>)
}
        {/* <ServicesDetails> </ServicesDetails> */}

        </section>
    )
}

export default ServicesProvide
