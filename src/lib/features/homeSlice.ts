import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchHome } from '../../services/api'; // Assuming your fetchHome function is exported from api file

interface HomeState {
  data: any; // Replace `any` with the appropriate type for your data
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: HomeState = {
  data: JSON.parse(localStorage.getItem('homeData') || 'null'),
  status: 'idle',
  error: null,
};

export const fetchHomeData = createAsyncThunk('home/fetchHomeData', async (lng: string)  => {

  const response = await fetchHome(lng);
  return response;
});

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHomeData.fulfilled, (state, action: PayloadAction<any>) => { // Replace `any` with your data type
        state.status = 'succeeded';
        state.data = action.payload;
        localStorage.setItem('homeData', JSON.stringify(action.payload));
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default homeSlice.reducer;
