import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


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
