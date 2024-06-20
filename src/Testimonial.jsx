import React from 'react'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
export default function Testimonial({cards}) {
 
  return (
    <div className='h-[390px] w-[450px] bg-white transform translate-y-[100px] translate-x-[500px]' >
      <div className=' h-[70px] w-[70px] rounded-full transform translate-y-[-50px] bg-violet-300'>  
      <img src={cards.image} className=" h-[70px] w-[70px] rounded-full transform translate-y-[5px] translate-x-[-5px]" />
         </div>
  
    <p className='text-3xl px-6 transform translate-y-[-10px] uppercase'>{cards.name}</p>
    <p className='opacity-50 uppercase px-10'>{cards.job}</p>
    <p className='px-40 py-2' >

      <BiSolidQuoteSingleLeft size={30} />
    </p>
    <p className='px-4 text-xl'>{cards.text}</p>
    <p className='px-40 py-2'>

      <BiSolidQuoteSingleRight size={30}/>
    </p>
    </div>
  )
}

