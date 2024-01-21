import React from 'react'
import SubHeading from "../../components/SubHeading/SubHeading"
import "./Header.css"
import { images } from '../../constants';

const Header = () => {
  let title="Chase the New Flavor";
  return (
    <div className='app__wrapper app__header section__padding' id="home">

    <div className="app__wrapper_info">
    <SubHeading title={title}/>
    <h1 className='app__header-h1'>The Key of fine dining</h1>

    <p className='p__opensans' style={{margin:"0.8rem 0"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, velit minus? Vitae architecto assumenda harum dignissimos iusto. Culpa tenetur facere placeat officiis.</p>

    <button className='custom-button'>explore menu</button>
    </div>

    <div className="app__wrapper_img">
    <img src={images.findus} alt="" />
    </div>
      
    </div>
  )
}

export default Header
