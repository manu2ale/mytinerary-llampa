import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../apiURL";

const read_carousel = createAsyncThunk(
    'read_carousel',
    async ()=> {
        try {
            let data = await axios(apiURL+'/cities/carousel')
            // console.log(data)
            return {
                carousel: data.data.data_carousel
            }
        } catch (error) {
           console.log(error)
           return {
            carousel: []
           }
        }
    }
);

const read_cities = createAsyncThunk(
    'read_cities',
    async (obj)=> {
        try {
            let data = await axios(apiURL+'cities?city='+obj.text)
            // console.log(data.data.response)
            return { cities: data.data.response }
        } catch (error) {
            return { cities : [] }
        }
    }
);

const read_city = createAsyncThunk(
    'read_city',
    async (obj)=> {
        try {
            let data = await axios(apiURL+'cities/'+obj.id)
            // console.log(data.data.response)
            return { city: data.data.response }
        } catch (error) {
            return { city : {} }
        }
    }
);


const city_actions = { read_carousel, read_cities, read_city}
export default city_actions;