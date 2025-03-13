import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../../../axios/axios";


export const getAllPosts = createAsyncThunk("recipes/getAllposts", async () => {
    let res = await axiosApi.get("posts");
    return res.data.posts;
})

export const getAllUsers = createAsyncThunk("recipes/getAllusers", async () => {
    let res = await axiosApi.get("users");
    return res.data.users;
})

export const getAllPostbyUserId = createAsyncThunk("recipes/getallrecipesbytag", async (tag) => {
    let res = await axiosApi.get(`posts/user/${tag}`);
    return res.data.posts;
})

export const getCommentsOnePost = createAsyncThunk("recipes/getCommentsOnePost", async (tag) => {
    let res = await axiosApi.get(`posts/${tag}/comments`);
    console.log(res.data.comments);
    
    return res.data.comments;
})


const postReducer = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        users:[],
        commnets:[],
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            console.log("hi from fulfilled");
            console.log(action);
            state.posts = action.payload;

        }).addCase(getAllUsers.fulfilled, (state, action) => {
            console.log("hi from fulfilled");
            console.log(action);
            state.users = action.payload;

        }).addCase(getAllPostbyUserId.fulfilled, (state, action) => {
            console.log("hi from fulfilled");
            console.log(action);
            state.posts = action.payload;

        }).addCase(getCommentsOnePost.fulfilled, (state, action) => {
            console.log("hi from fulfilled");
            console.log(action);
            state.commnets = action.payload;
        })
    }
})
export default postReducer.reducer;