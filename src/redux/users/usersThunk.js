import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../services/userService";

export const getUsersThunk = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const result = await fetchUsers();
      return result;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue();
    }
  }
);
