import { configureStore } from '@reduxjs/toolkit';
import view from './reducers/viewReducer/viewReducer';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    view
  }
});
