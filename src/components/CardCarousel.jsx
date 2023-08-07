import React from 'react'

export default function CardCarousel({ imgUrl, city }) {

  return (
    //  <div className={`bg-[url( ${imgUrl} ) ]`}></div>
    <div className='relative w-[300px] h-[300px] bg-cover bg-center rounded-xl' style={{backgroundImage: `url(${imgUrl})`}}>
        <div className='absolute bottom-0 bg-white/50 h-10 w-full  backdrop-blur text-center align-middle uppercase'>{city}</div>
    </div> 
  )
}
