import { createReducer } from "@reduxjs/toolkit";
import activity_actions from "../actions/activities";
const { read_activities } = activity_actions;

const initialState = {
    activities: []
}

const activities_reducer = createReducer(
    initialState,
    (builder)=>builder
    .addCase(
        read_activities.fulfilled,
        (state,action)=> {
            let newState = {
                ...state,
                activities: action.payload.activities
            }
            return newState
        }
    )
)

export default activities_reducer;