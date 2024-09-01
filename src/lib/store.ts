import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/bookSlice';
import pathReducer from './features/pathSlice';
import homeReducer from './features/homeSlice';
import serachReducer from './features/searchSlice';
import categoriesReducer from './features/categoriesSlice';

export const bookStore = () => {
  return configureStore({
    reducer: {
      booking: bookSlice,
      path: pathReducer,
      home: homeReducer,
      search:serachReducer,
      categories:categoriesReducer,



    },
  });
};

export type AppStore = ReturnType<typeof bookStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
