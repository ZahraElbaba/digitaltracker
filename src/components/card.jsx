import React from 'react'
import './card.css'
function CardKPI(props){

    const title=props.title;
    const content=props.content;
    const unit=props.unit;
    const icon=props.icon;
  return (
    <div className="box-card-container">
        <div className='main-title'>
        <span className="white-strip">{icon}</span>
        <span className="sec-title">{title}</span>
        </div>
        <br></br>
        <span className="inner-content">
        <span className='hero-content'>{content} &nbsp;</span> 
        <span className='units-display'>{unit}</span>
        </span>


      
    </div>
  )
}

export default CardKPI
