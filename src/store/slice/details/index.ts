import { createSlice } from "@reduxjs/toolkit"
import { DetailsType, DetailsTypeSlice, CreditsType, ReviewsType } from "../../../common/types/details"
import { getCredits, getDetails, getReviews } from "../../thunks/details"

const initialState: DetailsTypeSlice = {
  detailsData: {} as DetailsType,
  creditsData: {} as CreditsType,
  reviewsData: {} as ReviewsType
}

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.detailsData = action.payload;
    }),
    builder.addCase(getCredits.fulfilled, (state, action) => {
      state.creditsData = action.payload;
    }),
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.reviewsData = action.payload;
    })
  }
})

export default detailsSlice.reducer;