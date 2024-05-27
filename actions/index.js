export const ADD_LIKED_SONG = 'ADD_LIKED_SONG';
export const REMOVE_LIKED_SONG = 'REMOVE_LIKED_SONG';

export const addLikedSong = (fileKey) => ({
  type: ADD_LIKED_SONG,
  payload: fileKey,
});

export const removeLikedSong = (fileKey) => ({
  type: REMOVE_LIKED_SONG,
  payload: fileKey,
});
