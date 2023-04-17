import { createSlice } from "@reduxjs/toolkit"
import { getVideos } from "../../thunks/videos"

const initialState: any = {
  videosData: [],
}

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.videosData = action.payload;
    })
  }
})

export default videosSlice.reducer;