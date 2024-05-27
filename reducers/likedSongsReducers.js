import { ADD_LIKED_SONG, REMOVE_LIKED_SONG } from '../actions';

const initialState = {
  likedSongs: [],
};

const likedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKED_SONG:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };
    case REMOVE_LIKED_SONG:
      return {
        ...state,
        likedSongs: state.likedSongs.filter(fileKey => fileKey !== action.payload),
      };
    default:
      return state;
  }
};

export default likedSongsReducer;
