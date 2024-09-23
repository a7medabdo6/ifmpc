import { fetchCategories } from "@/services/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CategoriesState {
  data: any; // Replace `any` with the appropriate type for your categories data
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CategoriesState = {
  data:
    typeof window !== "undefined"
      ? JSON.parse(localStorage?.getItem("categoriesData") || "null")
      : null,
  status: "idle",
  error: null,
};

// Thunk to fetch categories
export const fetchCategoriesData = createAsyncThunk(
  "categories/fetchCategoriesData",
  async (lng: string) => {
    const response = await fetchCategories(lng);
    console.log(response);

    return response;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCategoriesData.fulfilled,
        (state, action: PayloadAction<any>) => {
          // Replace `any` with your data type
          state.status = "succeeded";
          state.data = action.payload;
          localStorage.setItem(
            "categoriesData",
            JSON.stringify(action.payload)
          );
        }
      )
      .addCase(fetchCategoriesData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch categories";
      });
  },
});

export default categoriesSlice.reducer;
