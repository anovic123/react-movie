import { createSlice } from '@reduxjs/toolkit';
import { ActorData, ActorMovies } from '../../../common/types/actor';
import { getActors, getActorsMovies } from '../../thunks/actors';

const initialState = {
  actorsData: {} as ActorData,
  actorsMoviesData: {} as ActorMovies
}

export const actorsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getActors.fulfilled, (state, action) => {
      state.actorsData = action.payload
    }),
    builder.addCase(getActorsMovies.fulfilled, (state, action) => {
      state.actorsMoviesData = action.payload
    })
  }
})

export default actorsSlice.reducer;