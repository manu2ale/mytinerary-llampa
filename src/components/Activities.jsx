import { useState,useEffect } from "react";
import { useDispatch } from "react-redux"; 
import activities_actions from '../store/actions/activities'
const {read_activities}= activities_actions


export default function Activities({id}) {
    const dispatch=useDispatch();
    let [activities,setActivities]=useState([])
    useEffect(
        ()=> {
            dispatch(read_activities(id))
            .then(response => setActivities(response.payload.activities))
            .catch(err => console.log(err))
        },[]
        )
        // console.log(activities)
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
