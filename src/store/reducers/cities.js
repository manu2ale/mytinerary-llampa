import { createReducer } from "@reduxjs/toolkit";
import city_actions from "../actions/cities";
const { read_carousel,read_cities, read_city } = city_actions

const initialState = {
    carousel: [],
    cities: [],
    city: {}
}

const city_reducer = createReducer(
    initialState,
    (builder) => builder
    .addCase(
        read_carousel.fulfilled,
        (state,action)=> {
            let newState = {
                ...state,
                carousel: action.payload.carousel
            }
            return newState
        }
    )
    .addCase(
        read_cities.fulfilled,
        (state,action)=> {
            let newState = {
                ...state,
                cities: action.payload.cities
            }
            return newState
        }
    )
    .addCase(
        read_city.fulfilled,
        (state,action)=> {
            let newState = {
                ...state,
                city: action.payload.city
            }
            return newState
        }
    )
)

export default city_reducer