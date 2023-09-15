import { createReducer } from "@reduxjs/toolkit";
import like_actions from "../actions/likes";
const { already_liked,read_likes,like_dislike } = like_actions;

const initial_state = {
    isLiked: false,
    countLikes: 0,
    success: false
}

const like_reducer = createReducer(
    initial_state,
    builder=>builder.addCase(
        already_liked.fulfilled,
        (state,action)=>{
            let new_state = {
                ...state,
                isLiked: action.payload.isLiked
            }
            return new_state
        }
        ).addCase(
            read_likes.fulfilled,
            (state,action)=>{
                let new_state = {
                    ...state,
                    countLikes: action.payload.countLikes
                }
                return new_state
            }
        ).addCase(
            like_dislike.fulfilled,
            (state,action)=>{
                let new_state = {
                    ...state,
                    success: action.payload.success
                }
                return new_state
            }
        )
)

export default like_reducer;