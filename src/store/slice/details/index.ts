import { createSlice } from "@reduxjs/toolkit"
import { getDetails } from "../../thunks/details"

const initialState: any = {
  detailsData: [],
}

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.detailsData = action.payload;
    })
  }
})

export default detailsSlice.reducer;