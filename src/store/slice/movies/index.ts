import { createSlice } from '@reduxjs/toolkit';
import { initialStateType } from '../../../common/types/movies';
import { getMovies, getHorrorMovies, getComedyMovies, getDocumentaryMovies, getNetflixMovies, getRomanceMovies } from '../../thunks/movies';

const initialState: initialStateType = {
  moviesData: [],
  horrorMovies: [],
  comedyMovies: [],
  documentaryMovies: [],
  netflixMovies: [],
  romanceMovies: [],
  moviesDataLoading: false,
  horrorMoviesLoading: false,
  comedyMoviesLoading: false,
  documentaryMoviesLoading: false,
  netflixMoviesLoading: false,
  romanceMoviesLoading: false,
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
    builder.addCase(getMovies.pending, (state) => {
      state.moviesDataLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.moviesData = action.payload;
      state.moviesDataLoading = false;
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.moviesData = [];
      state.moviesDataLoading = false;
    });

    builder.addCase(getHorrorMovies.pending, (state) => {
      state.horrorMoviesLoading = true;
    });
    builder.addCase(getHorrorMovies.fulfilled, (state, action) => {
      state.horrorMovies = action.payload;
      state.horrorMoviesLoading = false;
    });
    builder.addCase(getHorrorMovies.rejected, (state) => {
      state.horrorMovies = [];
      state.horrorMoviesLoading = false;
    });

    builder.addCase(getComedyMovies.pending, (state) => {
      state.comedyMoviesLoading = true;
    });
    builder.addCase(getComedyMovies.fulfilled, (state, action) => {
      state.comedyMovies = action.payload;
      state.comedyMoviesLoading = false;
    });
    builder.addCase(getComedyMovies.rejected, (state) => {
      state.comedyMovies = [];
      state.comedyMoviesLoading = false;
    })

    builder.addCase(getDocumentaryMovies.pending, (state) => {
      state.documentaryMoviesLoading = true;
    })
    builder.addCase(getDocumentaryMovies.fulfilled, (state, action) => {
      state.documentaryMovies = action.payload;
      state.documentaryMoviesLoading = false;
    });
    builder.addCase(getDocumentaryMovies.rejected, (state) => {
      state.documentaryMovies = [];
      state.documentaryMoviesLoading = false;
    })

    builder.addCase(getNetflixMovies.pending, (state) => {
      state.netflixMoviesLoading = true;
    })
    builder.addCase(getNetflixMovies.fulfilled, (state, action) => {
      state.netflixMovies = action.payload;
      state.netflixMoviesLoading = false;
    });
    builder.addCase(getNetflixMovies.rejected, (state) => {
      state.netflixMovies = [];
      state.netflixMoviesLoading = false;
    });

    builder.addCase(getRomanceMovies.pending, (state) => {
      state.romanceMoviesLoading = true;
    });
    builder.addCase(getRomanceMovies.fulfilled, (state, action) => {
      state.romanceMovies = action.payload;
      state.romanceMoviesLoading = false;
    });
    builder.addCase(getRomanceMovies.rejected, (state) => {
      state.romanceMovies = [];
      state.romanceMoviesLoading = false;
    })
  }
})

export const { setRandomMovie } = moviesSlice.actions;

export default moviesSlice.reducer;