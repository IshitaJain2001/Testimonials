import React, { useState } from 'react'
import data from './data'
import Testimonial from './Testimonial'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export default function Testimonials() {
const[card,setCard] = useState(0)
function moveahead(){
  if(card===data.length-1){
    setCard(0)
  }

  else{
    setCard(card+1)
  }
}
function movebehind(){
  if(card===0){
    setCard(data.length-1)
  }
  else{
    setCard(card-1)
  }
}
  return (
    <div  >
      <Testimonial cards= {data[card]}/>
      <button onClick={moveahead} className='transform translate-x-[654px] translate-y-[110px]'><FaAngleLeft size={50} /></button>
      <button onClick={movebehind} className='transform translate-x-[654px] translate-y-[110px] '> <FaAngleRight size={50}/></button>
     
    </div>
  )
}
