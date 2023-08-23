import { useState,useEffect,useRef } from "react";
import axios from "axios";
import apiURL from "../apiURL";
import CardCity from "../components/CardCity";

export default function Cities() {
const [cities,setCities] = useState([]);
const [reEffect, setREEffect] = useState(true);
const [errorValue,setErrorValue] = useState(false)
const text = useRef();
useEffect(
  ()=> {
    axios(apiURL+'cities?city='+text.current.value.trim())
    // .then(res=>console.log(res.data.response))
    .then(res=>setCities(res.data.response), setErrorValue(false))
    .catch(err=>setErrorValue(true))
    // .catch(err=>console.log(err))
  },[reEffect]
)
function handleFilter() {
  console.log(text.current.value);
  setREEffect(!reEffect);
}

  return (
    <div className="flex flex-col flex-grow justify-between items-center">
        <div className="h-[280px] w-full text-white flex flex-col self-top justify-center items-center gap-6 bg-cover bg-center
                        md:h-[400px]" 
            style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),url(${'../img/welcome.jpg'})`}}>
          <h1 className="text-5xl md:text-7xl">Cities</h1>
          <p className="shadow-md max-w-md italic text-xl text-center md:text-3xl">Collection of the most beautiful places and experience</p>
        </div>
        <div className="relative py-5 md:py-9">
          <svg className="absolute top-8 left-4 w-6 h-6 md:top-12 md:left-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input ref={text} type="text" onKeyUp={handleFilter}  className="h-12 w-[360px] rounded-full pl-14 outline-none text-xl text-gray-600 md:w-[672px]" placeholder="Search your city"/>
        </div>
        <div className="flex flex-grow flex-wrap justify-center items-center gap-3 pb-6">
          {cities.length > 0 && errorValue == false ?
             (cities.map(each=><CardCity key={each._id} city={each.city} imgUrl={each.photo} country={each.country} id={each._id}/>)) 
             : 
             (<div className="text-center text-xl">
                <p className="pb-8">We couldn't find anything</p>
                <p>You may want to try using different keywords or checking for spelling mistakes.</p>
              </div>)
          }
        </div>
    </div>
  )
}
