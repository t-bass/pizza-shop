import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/filretSlice';

export const store = configureStore({
  reducer: { counter: counterReducer },
});
