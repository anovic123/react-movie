import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/axios";

export const getTvPopular = createAsyncThunk('get-tv-popular', async (page: number, { rejectWithValue}) => {
  try {
    const response = await api.get(`tv/popular?language=en-US&page=${page}`)
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message)
    }
  }
})

