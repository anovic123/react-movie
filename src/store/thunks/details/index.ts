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