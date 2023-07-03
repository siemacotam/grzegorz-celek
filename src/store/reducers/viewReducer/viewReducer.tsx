import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { viewReducerInitialState } from './viewReducer.const';

export const viewSlice = createSlice({
  name: 'view',
  initialState: viewReducerInitialState,
  reducers: {
    changeViewMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      return { ...state, mode: action.payload };
    }
  }
});

export const { changeViewMode } = viewSlice.actions;

export default viewSlice.reducer;
