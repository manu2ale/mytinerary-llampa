import { createReducer } from "@reduxjs/toolkit";
import comments_actions from "../actions/comments";
const { read_comments,create_comment } = comments_actions;

const initial_state = {
    comments: [],
    comment_created: {}
}

const comments_readucer = createReducer(
    initial_state,
    builder=>builder.addCase(
        read_comments.fulfilled,
        (state,action)=> {
            let new_state = {
            ...state,
            comments: action.payload.comments
            }
            return new_state

        }
    ).addCase(
        create_comment.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                comment_created: action.payload.commentCreated
            }
            return new_state
        }
    )
)

export default comments_readucer;