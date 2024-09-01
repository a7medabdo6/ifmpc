// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Project {
//   id: number;
//   created: string;
//   modified: string;
//   name: string;
//   name_en: string;
//   name_ar: string;
//   content: string;
//   content_en: string;
//   content_ar: string;
//   image: string;
//   popularity_count: number;
//   category: number;
//   author: number[];
//   tags: number[];
// }

// interface Publication {
//   id: number;
//   created: string;
//   modified: string;
//   name: string;
//   name_en: string;
//   name_ar: string;
//   content: string;
//   content_en: string;
//   content_ar: string;
//   popularity_count: number;
//   category: number;
//   author: number[];
//   tags: number[];
// }

// interface ResultsSearchType {
//   projects: Project[];
//   publications: Publication[];
// }

// interface SearchState {
//   data: ResultsSearchType | null;
// }

// const initialState: SearchState = {
//   data: null,
// };

// export const searchSlice = createSlice({
//   name: 'search',
//   initialState,
//   reducers: {
//     setResultsSearch: (state, action: PayloadAction<ResultsSearchType>) => {
//       state.data = action.payload;
//     },
//     clearResultsSearch: (state) => {
//       state.data = null;
//     },
//   },
// });

// export const { setResultsSearch, clearResultsSearch } = searchSlice.actions;

// export default searchSlice.reducer;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchSearch } from '../../services/api'; // Import the fetchSearch function

interface SearchState {
  data: any; // Replace `any` with the appropriate type for your data
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SearchState = {
  data: {},
  status: 'idle',
  error: null,
};

// Create an async thunk to handle fetching search results
export const fetchSearchData = createAsyncThunk(
  'search/fetchSearchData',
  async ({ searchQuery, categoriesProjects, categoriesPublications, lng }: 
    { searchQuery: string; categoriesProjects: number[]; categoriesPublications: number[]; lng: string }) => {
    const response = await fetchSearch(searchQuery, categoriesProjects, categoriesPublications, lng);
    return response;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchData.fulfilled, (state, action: PayloadAction<any>) => { // Replace `any` with your data type
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default searchSlice.reducer;
