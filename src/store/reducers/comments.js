import { createReducer } from "@reduxjs/toolkit";
import comments_actions from "../actions/comments";
const { read_comments,create_comment,update_comment,delete_comment } = comments_actions;

const initial_state = {
    comments: [],
    comment_created: {},
    comment_updated:{},
    comment_deleted: false,
    success: false
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
    ).addCase(
        update_comment.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                comment_updated: action.payload.commentUpdated,
                success: action.payload.success
            }
            return new_state
        }
    ).addCase(
        delete_comment.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                comment_deleted: action.payload.commentDeleted
            }
            return new_state
        }
    )
)

export default comments_readucer;