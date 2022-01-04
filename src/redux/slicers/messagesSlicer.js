import { createSlice } from "@reduxjs/toolkit";

// import { dispatch } from '../store';

const initialState = {
    messages: []
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        download: (state, action) => {
            state.messages = action.payload
        },
        addMessage: (state, action) => {

            const findSavedMessage = state.messages.findIndex(f => f.person_id === action.payload.person_id && !f.isSent)

            if (findSavedMessage !== -1) {
                state.messages.splice(findSavedMessage, 1)
            }

            state.messages.push(action.payload)

        },
        // sendMessage: (state, action) => {
        //     const findMessgae = state.messages.findIndex(m => m.person_id === action.payload.person_id && !f.isSent)
        //     if (findMessgae !== -1) {
        //         state.messages.splice(findMessgae, 1)
        //     }

        //     state.messages.push(action.payload)
        // }
    }
})

export const { download, addMessage } = messagesSlice.actions;

export default messagesSlice.reducer