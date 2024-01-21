import React from 'react'

import SubHeading from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'
const FindUs = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id="contact">
    <div className="app__wrapper_info">
    <SubHeading title="Contact"/>
    <h1 className='headtext__cormorant'>Find Us</h1>
    <div className="app__wrapper-content">
      <p className='p__opensans'>Lorem ipsum dolor sit amet cacere vitae totam .</p>
      <p className='p__cormorant' style={{color:`var(--color-golden)`,margin:"1rem 0rem"}}>Opening Hours</p>
      <p className='p__opensans'>Mon-Fri 10:00 AM - 02:00 PM</p>
      <p className='p__opensans'>Sat-Sun 10:00 AM - 04:00 PM</p>
    </div>
    <button className='custom__button' style={{margin:"1rem 0px"}}>Find Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
      
    </div>
  )
}

export default FindUs
