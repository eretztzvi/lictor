import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import faker from 'faker'
import { dispatch } from '../store';

const initialState = {
    persons: []
};


export const personSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {
        download: (state, action) => {
            state.persons = action.payload;
        },

    }
});



export const { download } = personSlice.actions;



export default personSlice.reducer;
