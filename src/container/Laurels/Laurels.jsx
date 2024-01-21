import React from 'react'

import SubHeading from '../../components/SubHeading/SubHeading'
import { data, images } from '../../constants'
import "./Laurels.css"

const AwardCard=({item})=>{
  // let imgUrl=item.imgUrl;
  // let title=item.title;
  // let subtitle=item.subtitle;
  let {imgUrl,title,subtitle}=item;
  return(
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-info">
    <div className="app__laurels_awards-card-title">
      <p>
      {title}
      </p>
    </div>
    <div className='app__laurels_awards-card-subtitle'>
    <p>
    {subtitle}
    </p>
    </div>

    </div>
  </div>
  // console.log(imgUrl);
  // console.log(title);
  )
}

const Laurels = () => {
  return (
    <div className='app__bg section__padding  app__laurels  ' id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards and Recognition"/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      <div className="app__laurels_award">
        {data.awards.map(item=>{
          return <AwardCard item={item} key={item.title}/>
        })}
      </div>
    </div>
    <div className="app__wrapper_img">
    <img src={images.laurels} className="app__wrapper_img-img" alt="laurels" />
    </div>
     
    </div>
  )
}

export default Laurels
