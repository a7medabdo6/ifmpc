import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PathState {
  currentPath: string;
  pathAfterSlash: string;
}

const initialState: PathState = {
  currentPath: '',
  pathAfterSlash: '',
};

export const pathSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    updatePath: (state, action: PayloadAction<string>) => {
      state.currentPath = action.payload;
      state.pathAfterSlash = action.payload.split('/')[1] || '';
    },
  },
});

export const { updatePath } = pathSlice.actions;
export default pathSlice.reducer;
