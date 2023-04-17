import { createSlice } from "@reduxjs/toolkit"
import { VideosSliceType } from "../../../common/types/videos"
import { getVideos } from "../../thunks/videos"

const initialState: VideosSliceType = {
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