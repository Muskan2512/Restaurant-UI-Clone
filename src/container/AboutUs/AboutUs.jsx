import React from 'react'
import {images} from "../../constants"
import "./AboutUs.css"
const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg section__padding' id="about">
    <div className="app__aboutus-overlay  flex__center">
      <img src={images.G} alt="G" className='app__aboutus-overlay-G' />
    </div>
    <div className="app__aboutus-content ">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">
        About Us</h1>
          <img src={images.spoon} alt="spoon" className='spoon__image' />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque soluta, beatae dicta aliquid aperiam sed distinctio necessitatibus dolorum voluptate?</p>
          <button className="custom__button">
          Know More
          </button>
      </div>

      <div className="app__aboutus-content-knife">
        <img src={images.knife} alt="knife" className='app__aboutus-content-knife-img'/>
      </div>

      <div className="app__aboutus-content-history">
        <h1 className="headtext__cormorant">
        Our History</h1>
          <img src={images.spoon} alt="spoon" className='spoon__image' />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque soluta, beatae dicta aliquid aperiam sed distinctio necessitatibus dolorum voluptate?</p>
          <button className="custom__button">
          Know More
          </button>
      </div>


    </div>

      
    </div>
  )
}

export default AboutUs
