import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import apiURL from "../apiURL";
import Button from "../components/Button";


export default function CityDetail() {
    const { id } = useParams();

    const [citySelected, setCitySelected] = useState([]);

    useEffect(
        ()=> {
            axios(apiURL+'cities/'+id)
            // .then(res=>console.log(res.data.response))
            .then(res=>setCitySelected(res.data.response))
            .catch(err=>console.log(err))
        },[]
    )

  return (
    <div className='flex flex-grow flex-col justify-center items-center bg-cover bg-center text-white' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),url(${citySelected.photo})`}}>
        <h1 className="text-5xl font-bold md:text-6xl">{citySelected.city}</h1>
        <p className="py-12 text-xl font-medium w-[360px] 
                      md:text-2xl md:w-[762px]
        ">{citySelected.description}</p>
        <Button title='Back to cities' to='/cities'/>
        <h1 className='animate-pulse text-3xl py-6'>Site under construction</h1>
    </div>
  )
}
