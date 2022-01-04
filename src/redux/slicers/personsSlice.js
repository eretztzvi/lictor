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
        addLikeToPerson: (state, action) => {
            const findPerson = state.persons.findIndex(p => p._id === action.payload.person_id)
            const findLike = state.persons[findPerson].likes.findIndex(l => l.name === action.payload.like_name)

            if (action.payload.is_liked)
                state.persons[findPerson].likes[findLike].count = state.persons[findPerson].likes[findLike].count - 1

            if (!action.payload.is_liked)
                state.persons[findPerson].likes[findLike].count = state.persons[findPerson].likes[findLike].count + 1

        },
    }
});



export const { download, addLikeToPerson } = personSlice.actions;



export default personSlice.reducer;


// ----------------------------------------------------------------------

export function getPersons() {
    return async () => {
        try {
            const data = fetchDataFake()
            dispatch(personSlice.actions.download(data));
        } catch (error) {
            console.log(error)
        }
    };
}

// ----------------------------------------------------------------------

const fetchDataFake = () => {

    const data = []

    for (let i = 0; i < 30; i++) {
        const obj = {
            _id: faker.datatype.uuid(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            image: faker.image.image(),
            company: faker.company.companyName(),
            job: faker.name.jobTitle(),
            gender: faker.name.gender(),
            likes: [
                {
                    like_id: 'sdfsdfrtyrty53dgdfg',
                    name: "happy",
                    count: 111,
                    icon: '😀'
                },
                {
                    like_id: 'sdfsdfrtyrty53dgdnv',
                    name: "fine",
                    count: 123,
                    icon: '😐'
                },
                {
                    like_id: 'sdfsdfrtyrty53dgdnb',
                    name: "angry",
                    count: 321,
                    icon: '🤬'
                },
            ]
        }
        data.push(obj)

    }

    return data
}
