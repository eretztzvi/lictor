import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// import { dispatch } from '../store';

const initialState = {
  user: null
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    }
  }
});

export const { login, register, logout } = authSlice.actions;


export default authSlice.reducer;
