import { createSlice } from "@reduxjs/toolkit"
import { DetailsType, DetailsTypeSlice, CreditsType, ReviewsType } from "../../../common/types/details"
import { getCredits, getDetails, getReviews } from "../../thunks/details"

const initialState: DetailsTypeSlice = {
  detailsData: {} as DetailsType,
  detailsDataLoading: false,
  creditsData: {} as CreditsType,
  creditsDataLoading: false,
  reviewsData: {} as ReviewsType,
  reviewsDataLoading: false
}

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {    
    builder.addCase(getDetails.pending, (state) => {
      state.detailsDataLoading = true;
    }),
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.detailsData = action.payload;
      state.detailsDataLoading = false;
    }),
    builder.addCase(getDetails.rejected, (state) => {
      state.detailsDataLoading = false;
    }),

    builder.addCase(getCredits.pending, (state) => {
      state.creditsDataLoading = true;
    }),
    builder.addCase(getCredits.fulfilled, (state, action) => {
      state.creditsData = action.payload;
      state.creditsDataLoading = false;
    }),
    builder.addCase(getCredits.rejected, (state) => {
      state.creditsDataLoading = false;
    }),

    builder.addCase(getReviews.pending, (state) => {
      state.reviewsDataLoading = true;
    }),
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.reviewsData = action.payload;
      state.reviewsDataLoading = false;
    }),
    builder.addCase(getReviews.rejected, (state) => {
      state.reviewsDataLoading = false;
    })

  }
})

export default detailsSlice.reducer;