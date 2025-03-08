import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'

const StarRating = ({starCount = 5}) => {
  const [rating,setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (currentIndex)=>{
    setRating(currentIndex)

  }

  const handleMouseEnter = (currentIndex)=>{
    setHover(currentIndex)
  }

  const handleMouseLeave = ()=>{
    setRating(hover)
    setHover(0)
  }

  return (
    <div className="starRating flex justify-center ">
      {
        [...Array(starCount)].map((_,index)=>{
          index+=1;
          return <FaStar 
          key={index}
          className={index<=(hover||rating)?'text-yellow-400':'text-black'}
          onClick={()=>handleClick(index)}
          onMouseEnter={()=>handleMouseEnter(index)}
          onMouseLeave={()=>handleMouseLeave()}
          size={40}
          />

        })
      }
    </div>
  )
}

export default StarRating