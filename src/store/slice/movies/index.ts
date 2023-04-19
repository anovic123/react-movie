import { createSlice } from '@reduxjs/toolkit';
import { initialStateType, MovieType } from '../../../common/types/movies';
import { getMovies, getHorrorMovies, getComedyMovies, getDocumentaryMovies, getNetflixMovies, getRomanceMovies, getPopularMovies, getPlayingMovies } from '../../thunks/movies';

const initialState: initialStateType = {  
  moviesDataLoading: false,
  horrorMoviesLoading: false,
  comedyMoviesLoading: false,
  documentaryMoviesLoading: false,
  netflixMoviesLoading: false,
  romanceMoviesLoading: false,
  popularMoviesLoading: false,
  playingMoviesLoading: false,
  moviesData: [],
  horrorMovies: [],
  comedyMovies: [],
  documentaryMovies: [],
  netflixMovies: [],
  romanceMovies: [],
  popularMovies: {} as MovieType,
  playingMovies: {} as MovieType,
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
      state.moviesDataLoading = false;
      state.moviesData = action.payload;
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.moviesDataLoading = false;
    });

    builder.addCase(getHorrorMovies.pending, (state) => {
      state.horrorMoviesLoading = true;
    });
    builder.addCase(getHorrorMovies.fulfilled, (state, action) => {
      state.horrorMoviesLoading = false;
      state.horrorMovies = action.payload;
    });
    builder.addCase(getHorrorMovies.rejected, (state) => {
      state.horrorMoviesLoading = false;
      state.horrorMovies = [];
    });

    builder.addCase(getComedyMovies.pending, (state) => {
      state.comedyMoviesLoading = true;
    });
    builder.addCase(getComedyMovies.fulfilled, (state, action) => {
      state.comedyMoviesLoading = false;
      state.comedyMovies = action.payload;
    });
    builder.addCase(getComedyMovies.rejected, (state) => {
      state.comedyMoviesLoading = false;
      state.comedyMovies = [];
    })

    builder.addCase(getDocumentaryMovies.pending, (state) => {
      state.documentaryMoviesLoading = true;
    })
    builder.addCase(getDocumentaryMovies.fulfilled, (state, action) => {
      state.documentaryMovies = action.payload;
      state.documentaryMoviesLoading = false;
    });
    builder.addCase(getDocumentaryMovies.rejected, (state) => {
      state.documentaryMoviesLoading = false;
      state.documentaryMovies = [];
    })

    builder.addCase(getNetflixMovies.pending, (state) => {
      state.netflixMoviesLoading = true;
    })
    builder.addCase(getNetflixMovies.fulfilled, (state, action) => {
      state.netflixMoviesLoading = false;
      state.netflixMovies = action.payload;
    });
    builder.addCase(getNetflixMovies.rejected, (state) => {
      state.netflixMoviesLoading = false;
      state.netflixMovies = [];
    });

    builder.addCase(getRomanceMovies.pending, (state) => {
      state.romanceMoviesLoading = true;
    });
    builder.addCase(getRomanceMovies.fulfilled, (state, action) => {
      state.romanceMoviesLoading = false;
      state.romanceMovies = action.payload;
    });
    builder.addCase(getRomanceMovies.rejected, (state) => {
      state.romanceMoviesLoading = false;
      state.romanceMovies = [];
    })

    builder.addCase(getPopularMovies.pending, (state) => {
      state.popularMoviesLoading = true;
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.popularMoviesLoading = false;
      state.popularMovies = action.payload;
    })
    builder.addCase(getPopularMovies.rejected, (state) => {
      state.popularMoviesLoading = false;
    });

    builder.addCase(getPlayingMovies.pending, (state) => {
      state.playingMoviesLoading = true;
    });
    builder.addCase(getPlayingMovies.fulfilled, (state, action) => {
      state.playingMoviesLoading = false;
      state.playingMovies = action.payload;   
    });
    builder.addCase(getPlayingMovies.rejected, (state) => {
      state.playingMoviesLoading = false;
    })
  }
})

export const { setRandomMovie } = moviesSlice.actions;

export default moviesSlice.reducer;