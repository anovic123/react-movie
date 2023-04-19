import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './slice/movies';
import videosSlice from './slice/videos';
import detailsSlice from './slice/details';
import tvSlice from './slice/tv';

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    videos: videosSlice,
    details: detailsSlice,
    tv: tvSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
