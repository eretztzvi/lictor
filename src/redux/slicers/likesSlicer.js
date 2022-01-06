import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { dispatch } from '../store';
import Axios from 'axios'
import { Globals } from '../../Globals'

const initialState = {
    likes: []
};

export const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        download: (state, action) => {
            state.likes = action.payload;
        },
        addLike: (state, action) => {

            const finedLiked = state.likes.findIndex(l => l.email === action.payload.email && l.person_id === action.payload.person_id)

            if (finedLiked !== -1) {
                if (state.likes[finedLiked].like_name === action.payload.like_name) {
                    state.likes.splice(finedLiked, 1)
                    return
                }
                state.likes.splice(finedLiked, 1)
            }
            state.likes.push(action.payload)
        }
    }
});



export const { download, addLike } = likesSlice.actions;



export default likesSlice.reducer;

// ----------------------------------------------------------------------

export function getUserLikes() {
    return async () => {
        try {
           const userId = JSON.parse(localStorage.getItem('user'))._id

            Axios.get(Globals.getAllUserLikes + userId)
                .then(res => {
                    dispatch(likesSlice.actions.download(res.data));
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })

        } catch (error) {
            console.log(error)
        }
    };
}

// ----------------------------------------------------------------------
