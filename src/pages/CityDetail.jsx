import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import ShowItineraries from "../components/ShowItineraries";
import Button from "../components/Button";
import city_actions from "../store/actions/cities";
const { read_city } = city_actions;
import itinerary_actions from '../store/actions/itineraries';
const { read_itineraries_from_city } = itinerary_actions;


export default function CityDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [show,setShow] = useState(false);
    useEffect(
        ()=> {
          dispatch(read_city({ id:id}));
          dispatch(read_itineraries_from_city({ id:id }))
        },[]
    )
    
    const city = useSelector(store=>store.cities.city);
    const itineraries = useSelector(store=>store.itineraries.itineraries_from_city);
    // console.log(itineraries)
    // console.log(city)
  return (
    <>
    
      <div className='flex min-h-screen flex-auto flex-col justify-center items-center py-4 bg-cover bg-center text-white md:py-0' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),url(${city.photo})`}}>
          <h1 className="text-5xl font-bold md:text-6xl">{city.city}</h1>
          <p className="py-12 px-2 text-xl font-medium w-[360px] 
                        md:text-2xl md:w-[762px] sm:px-0 sm:w-10/12
          ">{city.description}</p>
          <div className="flex gap-12">
            <Button title='Back to cities' to='/cities'/>
            <a href="#itinerary"><button onClick={()=>setShow(!show)} className="py-3 px-2 bg-[#4F46E5] rounded-lg  text-lg text-white sm:text-2xl sm:px-12">{show ? "Hide Itineraries ↑":'View Itineraries ↓'} </button></a>
          </div>
      </div>
          {show && <ShowItineraries data={itineraries}/>}

    </>
  )
}
