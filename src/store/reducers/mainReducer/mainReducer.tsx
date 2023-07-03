import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sections } from 'global';
import { mainReducerInitialState } from './mainReducer.const';

export const mainSlice = createSlice({
  name: 'main',
  initialState: mainReducerInitialState,
  reducers: {
    changeSection: (state, action: PayloadAction<Sections>) => {
      return { ...state, activeSection: action.payload };
    }
  }
});

export const { changeSection } = mainSlice.actions;

export default mainSlice.reducer;
