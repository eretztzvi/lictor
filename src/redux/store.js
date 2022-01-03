import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slicers/authSlicer';
import personsReducer from './slicers/personsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    persons: personsReducer,
  },
});

const { dispatch } = store;

export { store , dispatch} 