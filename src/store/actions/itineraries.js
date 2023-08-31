import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../apiURL";

const read_itineraries_from_city = createAsyncThunk(
    'read_itineraries_from_city',
    async (obj)=> {
        try {
            let data = await axios(apiURL+'itineraries?city_id='+obj.id)
            // console.log(data.data.response)
            return {
                itineraries_from_city: data.data.response
            }
        } catch (error) {
            // console.log(error);
            return {
                itineraries_from_city: []
            }
        }
    }
)

const itinerary_actions = { read_itineraries_from_city }
export default itinerary_actions;