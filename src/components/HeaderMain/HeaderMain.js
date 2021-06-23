import React from 'react'
 import chair from '../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:'500px'}}  className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1  text-start ">
                <h1 className=" ">Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ab cum eveniet repudiandae, possimus natus blanditiis corrupti doloremque est quibusdam a dolorem modi? Impedit vero atque earum tenetur error nesciunt facere voluptatibus quasi omnis! Deleniti autem nam, dicta exercitationem perferendis ratione laborum sapiente ab cumque, quam soluta modi quaerat tempore.
                </p>
 
                <button style={{backgroundColor:'#1CC7C1'}} className="btn btn-primary"> Get Appintment</button>
                
            

            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
            
        </main>
    )
}

export default HeaderMain
