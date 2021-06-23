import React from 'react'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-light  ">
  <div class="container-fluid">
   
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  ">
        <li class="nav-item mx-2">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item  mx-2">
          <a class="nav-link" href="#">About</a>
        </li>

        <li class="nav-item mx-2">
          <a class="nav-link" href="#">Dental Services</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#">Reviews</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
       
        
      </ul>
       
    </div>
  </div>
</nav>
    )
}

export default NavBar
