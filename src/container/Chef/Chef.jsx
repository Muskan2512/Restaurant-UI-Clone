import React from 'react'

import SubHeading from '../../components/SubHeading/SubHeading'


import "./Chef.css"
import { images } from '../../constants'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} className="app__chef-image" alt="" />

      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <p className="headtext__cormorant">
          What we believe in
        </p>

        <div className='app__chef-content'>
          <img src={images.quote} alt="" />
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti alias possimus repellat odit odio accusamus corrupti voluptatem unde excepturi, ducimus consequatur fuga molestias!</span>
        </div>
        <div className="app__chef-author">
          <p className='app__chef-author-name'>Kevin Luo</p>
          <p className='app__chef-author-designation'>Chef & Founder</p>
        </div>
        <div className="app__chef-signature">
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chef
