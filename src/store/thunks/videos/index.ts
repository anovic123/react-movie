import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/axios";

export const getVideos = createAsyncThunk('get-videos', async (id: number, { rejectWithValue }) => {
  try {
    const response = await api.get(`movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`);
    return response.data.results;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
})