// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import successStoriesReducer from './data/successStoriesSlice';
import projectReducer from './data/projectSlice';

const store = configureStore({
  reducer: {
    successStories: successStoriesReducer,
    project: projectReducer,
  },
});

export default store;
