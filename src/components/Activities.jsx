import { useState,useEffect } from "react";

import axios from "axios";
import apiURL from "../apiURL";

import { useSelector, useDispatch } from "react-redux"; 
import activities_actions from '../store/actions/activities'
const {read_activities}= activities_actions


export default function Activities({data}) {
    // const dispatch=useDispatch();
    let [activities,setActivities]=useState([])
    useEffect(
        ()=> {
            // dispatch(read_activities({itinerary_id: data}))
            
            axios(apiURL+'/activities?itinerary_id='+data)
            .then(res=>setActivities(res.data.response))
            .catch(err=>console.log(err))
        },[]
        )
        // console.log(activities);
        // const activities = useSelector(store=>store.activities.activities)
        // let activities = [];
        // setActivities(useSelector(store=>store.activities.activities))
  return (
    <div className="flex flex-wrap gap-1 justify-center pb-6">
        {activities.length > 0 ? 
            activities.map((each,index)=>
            <div key={index} className="flex flex-col items-center border-2 rounded-lg p-1 shadow-md bg-white hover:shadow-none">
                <img className="rounded-lg w-44 aspect-video object-cover" src={each.photo} alt="activitiy photo" />
                <h1>{each.name}</h1>
            </div>)
        :
            <div><h1 className="font-semibold">No activities found</h1></div>}
    </div>
  )
}
