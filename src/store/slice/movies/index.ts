import { createSlice } from '@reduxjs/toolkit';
import { initialStateType } from '../../../common/types/movies';
import { getMovies, getHorrorMovies, getComedyMovies, getDocumentaryMovies, getNetflixMovies } from '../../thunks/movies';

const initialState: initialStateType = {
  moviesData: [],
  horrorMovies: [],
  comedyMovies: [],
  documentaryMovies: [],
  netflixMovies: [],
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
    }),
    builder.addCase(getHorrorMovies.fulfilled, (state, action) => {
      state.horrorMovies = action.payload;
    });
    builder.addCase(getComedyMovies.fulfilled, (state, action) => {
      state.comedyMovies = action.payload;
    });
    builder.addCase(getDocumentaryMovies.fulfilled, (state, action) => {
      state.documentaryMovies = action.payload;
    });
    builder.addCase(getNetflixMovies.fulfilled, (state, action) => {
      state.netflixMovies = action.payload;
    })
  }
})

export const { setRandomMovie } = moviesSlice.actions;

export default moviesSlice.reducer;