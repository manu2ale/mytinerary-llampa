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
    <div className='flex flex-grow flex-col justify-center items-center bg-cover bg-center text-white' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),url(${city.photo})`}}>
        <h1 className="text-5xl font-bold md:text-6xl">{city.city}</h1>
        <p className="py-12 text-xl font-medium w-[360px] 
                      md:text-2xl md:w-[762px]
        ">{city.description}</p>
        <div className="flex gap-12">
          <Button title='Back to cities' to='/cities'/>
          <button onClick={()=>setShow(!show)} className="bg-[#4F46E5] py-3 px-12 rounded-lg text-2xl text-white">View Itineraries ↓</button>
        </div>
    </div>
    <div>
        {show && <ShowItineraries />}
        {/* <h1 className='animate-pulse text-3xl py-6'>Site under construction</h1> */}
    </div>
    </>
  )
}
