import React from 'react'

export default function CardCarousel({ imgUrl, city }) {

  return (
    <div className='flex w-[250px] h-[250px] relative'>
      <img className='object-cover rounded-xl' src={imgUrl}/>
      <div className='absolute bottom-0 bg-teal-500/50 h-10 w-full  backdrop-blur rounded-b-lg text-center text-white align-middle'>{city}</div>
    </div> 
  )
}
