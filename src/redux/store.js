import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slicers/authSlicer';
import messagesRedcuer from './slicers/messagesSlicer';
import personsReducer from './slicers/personsSlice';
import likesReducer from './slicers/likesSlicer';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
    persons: personsReducer,
    messages: messagesRedcuer,
    likes: likesReducer
  },
});


const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { store, dispatch, useSelector, useDispatch };
