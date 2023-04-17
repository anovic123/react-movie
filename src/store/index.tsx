import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './slice/movies';
import videosSlice from './slice/videos';

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    videos: videosSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
