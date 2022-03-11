import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// combine all single reducer functions to load into store
var rootReducer = combineReducers({currentVideo, videoList});

export default rootReducer;
