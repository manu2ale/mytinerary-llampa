import { useState,useEffect,useRef } from "react";
import CardCity from "../components/CardCity";
import { useSelector,useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_cities } = city_actions


export default function Cities() {
  const [reEffect, setReffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch();
  
  useEffect(
    ()=> {
      dispatch(read_cities({ text:text.current.value?.trim()}));
    },[reEffect]
    )
    const cities = useSelector(store=>store.cities.cities)
  function handleFilter() {
    setReffect(!reEffect);
    // console.log(text.current.value);
  }

  return (
    <div className="flex flex-col flex-grow justify-between items-center">
        <div className="h-[280px] w-full text-white flex flex-col self-top justify-center items-center gap-6 bg-cover bg-center
                        md:h-[400px]" 
            style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 00.4)),url(${'../img/citiesindex.jpg'})`}}>
          <h1 className="text-5xl md:text-7xl">Cities</h1>
          <p className="shadow-md max-w-md italic text-xl text-center md:text-3xl">Collection of the most beautiful places and experience</p>
        </div>
        <div className="relative py-5 md:py-9">
          <svg className="absolute top-8 left-4 w-6 h-6 md:top-12 md:left-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input ref={text} type="text" onKeyUp={handleFilter}  className="h-12 w-[360px] rounded-full pl-14 outline-none text-xl border border-teal-500 text-gray-600 md:w-[672px]" placeholder="Search your city"/>
        </div>
        <div className="flex flex-grow flex-wrap justify-center items-center gap-3 pb-6">
          {cities.length > 0 ?
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
