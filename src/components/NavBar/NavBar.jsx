import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./NavBar.css"

import images from "../../constants/images"




const NavBar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);
  

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Log In /Register</a>
        <div />
      <a href="/" className='p__opensans'>Book Table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' className='app__navbar-ham' fontSize={22} onClick={()=>{setToggleMenu(true)}}/>

        {toggleMenu && (
        <div className="app__navbar__smallscreen_overlay flex-center slide-bottom">
          <MdOutlineRestaurantMenu  className="app__navabar-cross" color='#fff' fontSize={22} onClick={()=>{setToggleMenu(false)}}/>
        <ul className="app__navbar-smallscreen-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </div>
        )}
        </div>

    </nav>
  )
}

export default NavBar
