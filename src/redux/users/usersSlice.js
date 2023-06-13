import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk } from "./usersThunk";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, handlePending)
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(getUsersThunk.rejected, handleRejected);
  },
});

export const usersReducer = userSlice.reducer;
