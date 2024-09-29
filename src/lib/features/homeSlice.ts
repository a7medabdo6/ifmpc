// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { fetchHome } from "../../services/api"; // Assuming your fetchHome function is exported from api file

// interface HomeState {
//   data: any; // Replace `any` with the appropriate type for your data
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// const initialState: HomeState = {
//   data:
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage?.getItem("homeData") || "null")
//       : null,
//   status: "idle",
//   error: null,
// };

// export const fetchHomeData = createAsyncThunk(
//   "home/fetchHomeData",
//   async (lng: string) => {
//     const response = await fetchHome(lng);
//     return response;
//   }
// );

// export const homeSlice = createSlice({
//   name: "home",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchHomeData.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchHomeData.fulfilled, (state, action: PayloadAction<any>) => {
//         // Replace `any` with your data type
//         state.status = "succeeded";
//         state.data = action.payload;
//         localStorage.setItem("homeData", JSON.stringify(action.payload));
//       })
//       .addCase(fetchHomeData.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch data";
//       });
//   },
// });

// export default homeSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchHome } from "../../services/api"; // افترض أن دالة fetchHome مُصدرة من ملف api

interface HomeState {
  data: any; // استبدل `any` بالنوع المناسب للبيانات الخاصة بك
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: HomeState = {
  data:
    typeof window !== "undefined"
      ? JSON.parse(localStorage?.getItem("homeData") || "null")
      : null,
  status: "idle",
  error: null,
};

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async (lng: string) => {
    const response = await fetchHome(lng);
    return response;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHomeData.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.data = action.payload;

        const dataToStore = JSON.stringify(action.payload);
        if (dataToStore.length < 5 * 1024 * 1024) { // التحقق من الحجم قبل التخزين
            localStorage.setItem("homeData", dataToStore);
        } else {
            console.warn("Data too large for localStorage, not saving.");
            // يمكن اختيارياً مسح البيانات القديمة أو التعامل مع الأمر وفقًا لذلك
        }
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "فشل في جلب البيانات";
      });
  },
});

export default homeSlice.reducer;
