import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../utils/axios';

export const getMovies = createAsyncThunk(
  'get-movies',
  async (category: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`movie/${category}`);
      return response.data.results;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
) 

export const getHorrorMovies = createAsyncThunk('get-horror', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`/discover/movie?with_genres=27`)
    return response.data.results;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
})

export const getComedyMovies = createAsyncThunk('get-comedy', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`/discover/movie?with_genres=comedy`)
    return response.data.results;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
})

export const getDocumentaryMovies = createAsyncThunk('get-documentary', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`/discover/movie?with_genres=99`)
    return response.data.results;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getNetflixMovies = createAsyncThunk('get-netflix', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`/discover/tv?with_networks=213`)
    return response.data.results;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
})

export const getRomanceMovies = createAsyncThunk('get-romance', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`/discover/movie?with_genres=28`)
    return response.data.results;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
})

export const getPopularMovies = createAsyncThunk('get-popular-movies', async(page: number, { rejectWithValue }) => {
  try {
    const response = await api.get(`/movie/popular?language=en-US&page=${page}`)
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
})

export const getPlayingMovies = createAsyncThunk('get-playing-movies', async(page: number, { rejectWithValue }) => {
  try {
    const response = await api.get(`/movie/now_playing?language=en-US&page=${page}`)
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
} )