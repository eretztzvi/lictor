import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../store';
import Axios from 'axios'
import { Globals } from '../../Globals'

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
        addLikeToPerson: (state, action) => {

            const findPerson = state.persons.findIndex(p => p._id === action.payload.person_id)
            const findLike = state.persons[findPerson].likes.findIndex(l => l.name === action.payload.like_name)

            if (action.payload.is_liked)
                state.persons[findPerson].likes[findLike].count = state.persons[findPerson].likes[findLike].count - 1

            if (!action.payload.is_liked)
                state.persons[findPerson].likes[findLike].count = state.persons[findPerson].likes[findLike].count + 1

        },
        decreaseLikeFromPerson: (state, action) => {
            const findPersonToDecrease = state.persons.findIndex(p => p._id === action.payload.person_id)
            const findLikeToDecrease = state.persons[findPersonToDecrease].likes.findIndex(l => l.name === action.payload.like_name)

            state.persons[findPersonToDecrease].likes[findLikeToDecrease].count--
        }
    }
});



export const { download, addLikeToPerson, decreaseLikeFromPerson } = personSlice.actions;

export default personSlice.reducer;

// ----------------------------------------------------------------------

export function getPersons() {
    return async () => {
        try {
            Axios.get(Globals.getAllPersonsForUser)
                .then(res => {
                    dispatch(personSlice.actions.download(res.data));
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

