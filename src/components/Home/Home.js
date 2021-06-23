import React from 'react'
 import Header from '../Header/Header'
 import BusinessInfo from './BusinessInfo/BusinessInfo'
 import ServicesProvide from './ServicesProvide/ServicesProvide'
 import Exceptional from './Exceptional/Exceptional'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <BusinessInfo></BusinessInfo>
            < ServicesProvide></ServicesProvide>
            <Exceptional></Exceptional>
            
            
        </div>
    )
}

export default Home
