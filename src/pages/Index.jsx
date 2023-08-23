import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import axios from 'axios'
import apiURL  from '../apiURL.js'

export default function Index() {

  const [data,setData] = useState([])


useEffect(
()=>{
  axios(apiURL+'cities/carousel')
    // .then(res=>console.log(res.data.data_carousel))
    .then(res=>setData(res.data.data_carousel))
    .catch(err=>console.log(err))
},
[]
)

  return (
    <>
        <main className="flex grow justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${'../img/index.jpg'})`}}>
          
          <section className='flex flex-wrap bg-white/50 backdrop-blur rounded-xl px-2 py-8 font-bold text-lg justify-center items-center  
            lg:py-2
            xl:w-[95%]
            2xl:w-[80%]
          '>

            <div className='my-5 text-center
            lg:w-3/4
            xl:w-1/2 xl:text-left
            2xl:w-1/2'>
              <div className='flex flex-col gap-5 justify-center items-center'>
                <img className='w-[240px]' src="/img/greenLogo.png" alt="" />
                <h1 className='shadow-md italic'>Find your perfect trip, designed by insiders who know and love their cities!</h1>
              </div>
              <h1 className='my-8 text-4xl font-bold'>Find the perfect destination</h1>
              <p className='my-8 text-2xl text-gray-700 font-semibold'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
              <Button title='View More' to='/cities'/>
            </div>

            <Carousel data={data} />
          </section>
        </main>
    </>
  )
}
