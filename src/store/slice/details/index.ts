import { createSlice } from "@reduxjs/toolkit"
import { DetailsType, DetailsTypeSlice } from "../../../common/types/details"
import { getDetails } from "../../thunks/details"

const initialState: DetailsTypeSlice = {
  detailsData: {} as DetailsType,
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