import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../apiURL";

const signin = createAsyncThunk(
    'signin',
    async(obj)=> {
        try {
            let data = await axios.post(apiURL+'auth/signin',obj.data)
            localStorage.setItem('token',data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            return {
                user: {},
                token: ''
            }
        }
    }
)

const signin_token = createAsyncThunk(
    'signin_token',
    async()=> {
        try {
            let token = localStorage.getItem('token');
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.post(apiURL+'auth/token',null,authorization)
            localStorage.setItem('token',data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            return {
                user: {},
                token: ''
            }
        }
    }
)

const signout = createAsyncThunk(
    'signout',
    async()=> {
        try {
            let token = localStorage.getItem('token');
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.post(apiURL+'auth/signout',null,authorization)
            localStorage.removeItem('token')
            return {
                user: [],
                token: ''
            }
        } catch (error) {
            return {
                user: {},
                token: ''
            }
        }
    }
)
const user_actions = { signin,signin_token,signout }
export default user_actions;