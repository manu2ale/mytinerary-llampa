import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../apiURL";

const already_liked = createAsyncThunk(
    'already_liked',
    async (obj)=>{
        try {
            let token = localStorage.getItem('token');
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.post(apiURL+'likes/alreadyLiked',obj,authorization)
            return {
                isLiked: data.data.response
            }
        } catch (error) {
            return {
                isLiked: false
            }
        }
    }
)
const like_dislike = createAsyncThunk(
    'like_dislike',
    async (obj)=>{
        try {
            let token = localStorage.getItem('token');
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.post(apiURL+'likes',obj,authorization)
            return {
                like_dislike: data.data.success
            }
        } catch (error) {
            return {
                like_dislike: false
            }
        }
    }
)
const read_likes = createAsyncThunk(
    'read_likes',
    async (obj)=>{
        try {
            let token = localStorage.getItem('token');
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios(apiURL+'likes?itinerary_id='+obj,authorization)
            return {
                countLikes: data.data.response
            }
        } catch (error) {
            return {
                countLikes: 0
            }
        }
    }
)

const like_actions = { already_liked, read_likes, like_dislike }
export default like_actions;