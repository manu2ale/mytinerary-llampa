import { configureStore } from "@reduxjs/toolkit";
import city_reducer from "./reducers/cities";
import itinerary_reducer from "./reducers/itineraries";
import user_reducer from "./reducers/users";
import activities_reducer from "./reducers/activities";
import like_reducer from "./reducers/likes";
import comments_readucer from "./reducers/comments";

export default configureStore({
    reducer: {
        cities: city_reducer,
        itineraries: itinerary_reducer,
        users: user_reducer,
        activities: activities_reducer,
        likes: like_reducer,
        comments: comments_readucer
        }
    }
)