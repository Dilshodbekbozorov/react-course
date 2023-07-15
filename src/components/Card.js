import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <div className="top">
        <h2>{props.name}</h2>
        <img src={props.imgURL} alt="" />
        <div className="bottom">
          <p>{props.liked}</p>
          <p>{props.year}</p>
        </div>
      </div>
    </div>
  )
}

export default Card