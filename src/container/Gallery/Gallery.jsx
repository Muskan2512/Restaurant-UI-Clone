import React, { useEffect } from 'react'
import { useRef } from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import SubHeading from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'
import "./Gallery.css"

const Gallery = () => {
  let galleryImages=[
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery01,
    images.gallery03,
    images.gallery02,
    images.gallery03,
    images.gallery01,
    images.gallery03,
  ];

  let scrollRef=useRef(null);

  
 const scroll=(direction,event)=>{
  const {current}=scrollRef;
  if(direction==="left"){
    current.scrollLeft-=300;
  }
  if(direction==="right"){
    current.scrollLeft+=300;
  }
 }

  return (
    <div className='app__gallery section__padding flex__center'>
    <div className="app__gallery-content">
      <SubHeading title="Instagram"/>
      <p className="headtext__cormorant">
          Photo Gallery
        </p>
        <p className='p__opensans' style={{color:"#AAA",marginTop:"1rem",marginBottom:"1rem"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis necessitatibus consequuntur unde doloribus sed ipsam, repudiandae dolorem nobis recusandae!
        </p>
        <button className='custom__button'>View More</button>
    </div>

    
     
      <div className='app__gallery-images_container'>

      <div className="app__gallery-images_scroll" ref={scrollRef}>
      {galleryImages.map(item=>{
        return <div className="app__gallery-images_container_box ">
      <img src={item} alt="imageScroll" className='app__gallery-images_container-img' />
        <BsInstagram className='insta '/>
      </div>
      })}

      </div>

      


      <div className="app__gallery-images-arrow">
      <FaArrowLeft className='app__gallery_icons left_icon'
        onClick={()=>{scroll("left")}}
      />
      <FaArrowRight className='app__gallery_icons right_icon'
        onClick={()=>{scroll("right")}}
      />

      </div>

      </div>
    </div>

      

  )
}

export default Gallery
