import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/axios";

export const getDetails = createAsyncThunk(
  'get-details',
  async ({ id, type }: { id: string, type: string }, { rejectWithValue }) => {
    try {
      const response = await api.get(`${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
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

export const getCredits = createAsyncThunk(
  'get-credits',
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await api.get(`movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`)
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

export const getReviews = createAsyncThunk(
  'get-reviews',
  async ({ id, type, page }: { id: string, type: string, page: number }, { rejectWithValue }) => {
    try {
      const response = await api.get(`${type}/${id}/reviews?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`)
      return response.data
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const postMovie = createAsyncThunk(
  'rate-movie',
  async ({ id, type, params }: { id: string, type: string, params: any }, { rejectWithValue }) => {
    try {
      const response = api.post(`${type}/${id}/rating?api_key=${import.meta.env.VITE_API_KEY}`, params)
      return response;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)