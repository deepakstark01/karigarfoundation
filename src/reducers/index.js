import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import successStoriesReducer from './successStoriesReducer';

const rootReducer = combineReducers({
  project: projectReducer,
  successStories: successStoriesReducer,
});

export default rootReducer;
