import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import axios from 'axios'

export default function Index() {

  const [data,setData] = useState([])

useEffect(
()=>{
  axios('/data.json')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
},
[]
)

  return (
    <>
        <main className="flex grow justify-center items-center  bg-cover bg-center" style={{backgroundImage: `url(${'../img/index.jpg'})`}}>
          <section className='bg-white/50 backdrop-blur rounded-xl p-2 flex font-bold text-lg justify-between items-center flex-wrap min-[1367px]:w-[80%]'>
            <div className=''>
              <h1 className='my-8 text-5xl font-bold'>Find the perfect destination</h1>
              <p className='my-8 max-w-[628px] text-2xl text-gray-500 font-semibold'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
              <Button title='View More' to='#'/>
            </div>
            <Carousel data={data} />
          </section>
        </main>
    </>
  )
}
