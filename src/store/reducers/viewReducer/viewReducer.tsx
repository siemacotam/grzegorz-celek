import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { initialState } from './viewReducer.const';

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    changeViewMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      return { ...state, mode: action.payload };
    }
  }
});

export const { changeViewMode } = viewSlice.actions;

export const selectCount = (state: RootState) => state.view;

export default viewSlice.reducer;
