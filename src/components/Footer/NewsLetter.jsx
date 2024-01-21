import React from 'react'
import "./NewsLetter.css"
import SubHeading from "../../components/SubHeading/SubHeading"

const NewsLetter = () => {
  return (
    <div className='app__newsletter'>
  <SubHeading title="Newsletter"/>
  <p className='headtext__cormorant heading__text'>Subscribe to our NewsLetter</p>
  <p className='p__opensans'>Lorem ipsum dolor sit amet.</p>

  <div className="app__newsletter-input">
    <input type="email" placeholder='Email Address' />
    <button className='custom__button'>Subscribe</button>
  </div>
      
    </div>
  )
}

export default NewsLetter
