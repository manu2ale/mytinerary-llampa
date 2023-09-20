import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../apiURL";

const read_comments = createAsyncThunk(
    'read_comments',
    async (obj)=> {
        try {
            let data = await axios(apiURL+'comments?itinerary_id='+obj);
            return {
                comments: data.data.response
            }
        } catch (error) {
            // console.log(error)
            return {
                comments: []
            }
        }
    }
)

const create_comment = createAsyncThunk(
    'create_comment',
    async (obj)=> {
        try {
            let token = localStorage.getItem('token');
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` }};
            let data = await axios.post(apiURL+'comments',obj,authorization);
            return {
                commentCreated: data.data.response
            }
        } catch (error) {
            console.log(error)
            return {
                commentCreated: {}
            }
        }
    }
)

const comments_actions = { read_comments,create_comment};
export default comments_actions;