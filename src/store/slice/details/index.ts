import { createSlice } from "@reduxjs/toolkit"
import { DetailsType, DetailsTypeSlice } from "../../../common/types/details"
import { getCredits, getDetails } from "../../thunks/details"

const initialState: any = {
  detailsData: {} as DetailsType,
  creditsData: [],
}

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.detailsData = action.payload;
    }),
    builder.addCase(getCredits.fulfilled, (state, action) => {
      state.creditsData = action.payload;
    })
  }
})

export default detailsSlice.reducer;