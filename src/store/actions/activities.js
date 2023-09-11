import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../apiURL";

const read_activities = createAsyncThunk(
    'read_activities',
    async (obj)=>{
        try {
            let data = await axios(apiURL+'/activities?itinerary_id='+obj.itinerary_id)
            // console.log(data.data.response)
            return {
                activities: data.data.response
            }
        } catch (error) {
            console.log(error)
            return {
                activities:[]
            }
        }
    }
)

const activity_actions = { read_activities }
export default activity_actions;