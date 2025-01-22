import React from 'react'
import './card.css'
function CardKPI(props){

    const title=props.title;
    const content=props.content;
    const unit=props.unit;
  return (
    <div className="box-card-container">
        
        <img src="" alt={title}></img>
        <h2 className="title">{title}</h2>

        <span className='hero-content'>{content}</span>
        <span className='units-display'>{unit}</span>


      
    </div>
  )
}

export default CardKPI
