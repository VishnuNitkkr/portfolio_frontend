import React from 'react'
import './../src/styles/Card.css'
const Card = ({img,title, text}) => {
  return (
    <>
     <div className="card" style={{width: '24rem'}}>
  <img className="card-img-top" src={img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{text}</p>
    <a href="#" className="card-btn ">Visit Website</a>
  </div>
</div>

    </>
  )
}

export default Card
