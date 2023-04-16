import { createSlice } from '@reduxjs/toolkit';
import { getMovies } from '../../thunks/movies';

const initialState: any = {
  moviesData: [],
  randomMovieIndex: 0
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setRandomMovie: (state) => {
      state.randomMovieIndex = Math.floor(Math.random() * state.moviesData.length);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.moviesData = action.payload;
    })
  }
})

export const { setRandomMovie } = moviesSlice.actions;

export default moviesSlice.reducer;