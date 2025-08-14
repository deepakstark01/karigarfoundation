import { combineReducers } from 'redux';
import projectReducer from './projectSlice'; // 🔧 fixed import names
import successStoriesReducer from './successStoriesSlice';

const rootReducer = combineReducers({
  project: projectReducer,
  successStories: successStoriesReducer,
});

export default rootReducer;
