import { createSlice } from '@reduxjs/toolkit';
import { initialStateTvType, popularTvDataType } from '../../../common/types/tv';
import { getTvPopular } from '../../thunks/tv';

const initialState: initialStateTvType = {
  popularTvData: {} as popularTvDataType,
  popularTvDataLoading: false,
}

export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTvPopular.pending, (state) => {
      state.popularTvDataLoading = true;
    });
    builder.addCase(getTvPopular.fulfilled, (state, action) => {
      state.popularTvDataLoading = false;
      state.popularTvData = action.payload;
    });
    builder.addCase(getTvPopular.rejected, (state) => {
      state.popularTvDataLoading = false;
    })
  }
})

export default tvSlice.reducer;