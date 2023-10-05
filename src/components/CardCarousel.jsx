import React from 'react'

export default function CardCarousel({ imgUrl, city }) {

  return (
    <div className='flex w-[250px] h-[232px] rounded-xl relative overflow-hidden select-none'>
      <img className='object-cover' src={imgUrl}/>
      <div className='absolute bottom-0 w-full text-teal-500 h-10 text-center bg-white align-middle'>{city}</div>
    </div> 
  )
}
