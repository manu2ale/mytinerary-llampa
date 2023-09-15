import { createReducer } from "@reduxjs/toolkit";
import user_actions from '../actions/users'
const { signup,signin,signin_token,signout,update_user } = user_actions

const initial_state = {
    user: {},
    token:'',
    success:'',
    messages:[]
}

const user_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        signin.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                messages: action.payload.messages
            }
            return new_state
        }
    ).addCase(
    signup.fulfilled,
    (state,action)=> {
        let new_state = {
            ...state,
            success: action.payload.success
        }
        return new_state
    }
    ).addCase(
        signin_token.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        signout.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        update_user.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user:action.payload.user
            }
            return new_state
        }
    )
)

export default user_reducer;