import { createSlice } from "@reduxjs/toolkit";

const isLoading = createSlice({
  name: "isLoading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    actionIsLoading: (state, action) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { actionIsLoading } = isLoading.actions;

export default isLoading;
