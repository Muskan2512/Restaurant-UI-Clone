import React from 'react'
import "./Menuitem.css"
const MenuItem = (props) => {
  return (
    <div className='app__menuitem'>
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className='p__cormorant' style={{ color: "#dcca87", fontSize: "1.25rem", width:"170px"}} >{props.title}</p>

          <div  className="app__menuitem-price-container" style={{ width: "70px", height: "1.5px", background: "grey" }}></div>
          <p className='app__menuitem-price'>{props.price}</p>
        </div>
        <div className="app__menuitem-tags">
        <p style={{fontFamily:"var(--font-alt)" ,fontSize:"0.8rem", fontWeight:"500",opacity:"0.5"}}>{props.tags}</p>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
