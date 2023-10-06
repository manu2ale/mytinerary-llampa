import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
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
    // // console.log(city)

  return (
    <>
      <div className='flex grow flex-col justify-center items-center bg-cover bg-center bg-fixed text-white pt-[50px] sm:pt-[70px]' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),url(${city.photo})`}}>
          <h1 className="text-5xl font-bold md:text-6xl animate-fade-bottom">{city.city}</h1>
          <p className="pt-2 pb-6 px-2 text-xl w-[360px] font-semibold animate-fade-up
                        md:text-2xl md:w-[768px] sm:px-0 sm:w-10/12
          ">{city.description}</p>
          <div className="flex gap-12 pb-2">
            <Button title='Back to cities' to='/cities'/>
            <a  onClick={()=>setShow(!show)} href="#itineraries" className="py-3 px-2 bg-teal-500 hover:bg-teal-600 rounded-lg  text-lg text-white sm:text-2xl sm:px-12">{show ? "Hide ↑":'View Itineraries ↓'} </a>
          </div>
          {show && <ShowItineraries data={itineraries}/>}
      </div>
    </>
  )
}
