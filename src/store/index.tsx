import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './slice/movies';
import videosSlice from './slice/videos';
import detailsSlice from './slice/details';

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    videos: videosSlice,
    details: detailsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
