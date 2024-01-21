import React from 'react';

import SubHeading from "../../components/SubHeading/SubHeading";
import Menuitem from "../../components/Menuitem/MenuItem";


import { images, data } from '../../constants';
import "./SpecialMenu.css"
import MenuItem from '../../components/Menuitem/MenuItem';
const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex_center section__padding ' id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you" />
        <h1 className="headtext__cormorant">
          Today's Special
        </h1>
      </div>

      <div className="app__specialMenu-menu">

        <div className="app__specialMenu-menu-wine">
          <p className='app__specialMenu_menu-p'>Wine & Beer</p>
          <div className="app__special_menu_items">
            {data.wines.map((item, index) => <MenuItem key={item.title+index} title={item.title} price={item.price} tags={item.tags}/>)}
          </div>
        </div>

          <div className="app__specialMenu-menu-img">
            <img src={images.menu} alt="" />
          </div>



          <div className="app__specialMenu-menu-cocktails">
          <p className='app__specialMenu_menu-p'>CockTails and Party</p>
          <div className="app__special_menu_items">
            {data.cocktails.map((item, index) => 
              <MenuItem key={item.title+index} title={item.title} price={item.price} tags={item.tags}/>
            )}
          </div>
          </div>


      </div>
        

        <div style={{ marginTop: "1rem" }}>
          <button type="button" className='custom__button'>
            View More
          </button>
        </div>

    </div>


  )
}

export default SpecialMenu
