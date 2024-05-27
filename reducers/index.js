import { combineReducers } from 'redux';
import likedSongsReducer from './likedSongsReducers';

const rootReducer = combineReducers({
  likedSongs: likedSongsReducer,
});

export default rootReducer;
