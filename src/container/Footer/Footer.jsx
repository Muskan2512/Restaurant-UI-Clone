import React from 'react'
import "./Footer.css"
import {FiFacebook ,FiTwitter, FiInstagram } from "react-icons/fi"
import NewsLetter from "../../components/Footer/NewsLetter"
import { images } from '../../constants'
const Footer = () => {
  return (
    <div className='app__wrapper  app__footer'>
    <NewsLetter/>


    <div className="app__footer-links">
      <div className="app__footer-links-contact">
      <h1 className='app__footer-headtext'>Contact Us</h1>
      <p className='p__opensans'>9-W,Lorem ipsum dolor sit amet.</p>
      <p className='p__opensans'>+1 347-923-48</p>
      <p className='p__opensans'>+1 30-49-307-98</p>
      </div>
      <div className="app__footer-links-logo">
      <img src={images.gericht} className='logo-img' alt="" />
      <p className="p__opensans para">"The best way to find yourself is to lose yourself in the service of others."</p>
      <img src={images.spoon} classNamealt="spoon" />
      <div className="app__footer-links-icons">
        <FiFacebook style={{color:"white"}}/>
        <FiTwitter style={{color:"white"}}/>
        < FiInstagram style={{color:"white"}}/>
      </div>
      </div>
      <div className="app__footer-links-work">
      <h1 className='app__footer-headtext'>Working Hours</h1>
      <p className='p__opensans'>Monday-Friday</p>
      <p className='p__opensans'>08:00am - 12:00pm</p>
      <p className='p__opensans'>Saturday-Sunday</p>
      <p className='p__opensans'>07-00am-11:30am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className='p__opensans'>2021,Gericht Lorem ipsum dolor si.</p>
    </div>



    </div>

    

  )
}

export default Footer
