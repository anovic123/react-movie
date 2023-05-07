import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/axios"; 

export const getActors = createAsyncThunk(
  'get-actor',
  async (id: string, { rejectWithValue }) => {
    try  {
      const response = await api.get(`person/${id}`)
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    } 
  }
)

export const getActorsMovies = createAsyncThunk(
    'get-actor-movies',
    async (id: string, { rejectWithValue }) => {
      try {
        const response = await api.get(`person/${id}/movie_credits`);
        return response.data;
      } catch (error: any) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
)