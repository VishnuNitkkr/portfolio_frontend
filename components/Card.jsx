import React from 'react'
import './../src/styles/Card.css'
import { Link } from 'react-router-dom'
const Card = ({img,title, text,visit}) => {
  return (
    <>
     <div className="card" style={{width: '24rem'}}>
  <img className="card-img-top" src={img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{text}</p>
    <Link to={visit} className="card-btn ">Visit Website</Link>
  </div>
</div>

    </>
  )
}

export default Card
