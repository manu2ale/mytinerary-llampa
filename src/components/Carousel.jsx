import CardCarousel from '../components/CardCarousel'
import Arrow from '../components/Arrow'
import { useState, useEffect } from 'react'

export default function Carousel({ data }) {

  let [counter,setCounter] = useState(0);
  let [counterTo,setCounterTo] = useState(4);

  function next_slide() {
    if (data.length === counterTo) {
      setCounter(0);
      setCounterTo(4);
    } else {
      setCounter(counter+4);
      setCounterTo(counterTo+4);
    }
  }
  
  function prev_slide() {
    if (counter === 0) {
      setCounter(data.length-4);
      setCounterTo(data.length);
    } else {
      setCounter(counter-4);
      setCounterTo(counterTo-4);
    }
  }
  return (
<>
    <div className='flex md:w-[50%] justify-center items-center'>
        <Arrow onClick={prev_slide} direction="M15.75 19.5L8.25 12l7.5-7.5" />
        <div className='flex flex-wrap justify-center items-center gap-2' >
            {data.slice(counter, counterTo).map((each,index)=> <CardCarousel key={index} imgUrl={each.photo} city={each.city} />)}
        </div>
        <Arrow onClick={next_slide} direction="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </div>
</>
  )
  }
