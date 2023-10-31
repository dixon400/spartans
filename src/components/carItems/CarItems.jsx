import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './CarItems.css'

const CarItems = ({id, make, model, year,price, color}) => {
const [isHovered, setIsHovered] = useState(false)
const navigate = useNavigate();

const style = {
    backgroundColor: isHovered? 'blue' : 'brown',
}
const handleMouseEnter = () => {
    setIsHovered(true)
}
const handleMouseLeave = () => {
    setIsHovered(false)
}

const handleOnClick = () => {
  console.log({id, make, model, year,price, color});
  navigate(`${id}`)
}

  return (
    <div className='card'
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     onClick={handleOnClick}
     >
      <div style={style} className="inst make">name: {make}</div>
      <div className="inst ">model: {model}</div>
      <div className="inst ">year: {year}</div>
      <div className="inst ">price: {price}</div>
      <div className="inst ">color: {color}</div>
    </div>
  )
}

export default CarItems