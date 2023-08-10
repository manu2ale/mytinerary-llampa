import React from 'react'

export default function CardCarousel({ imgUrl, city }) {

  return (
    <div className='flex w-[250px] h-[250px] relative hover:cursor-pointer'>
      <img className='object-cover rounded-xl hover:brightness-75' src={imgUrl}/>
      <div className='absolute bottom-0 bg-white/50 h-10 w-full  backdrop-blur text-center align-middle uppercase'>{city}</div>
    </div> 
  )
}
