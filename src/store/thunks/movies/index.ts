import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../utils/axios';

export const getMovies = createAsyncThunk(
  'get-movies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`movie/popular?api_key=0192efb618f2132abdb27537670657d7`);
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