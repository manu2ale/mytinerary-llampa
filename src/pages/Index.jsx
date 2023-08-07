import React from 'react'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import { useState } from 'react'


export default function Index() {

  let data = [
    {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
    {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
    {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
    {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
    {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
    {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
    {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
    {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
    {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
    {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
    {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
    {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
    {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
    {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
    {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
    {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
]
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
