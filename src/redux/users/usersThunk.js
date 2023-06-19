import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, updateTweetById } from "../../services/userService";

export const getUsersThunk = createAsyncThunk(
  "users/getUsers",
  async (page, { rejectWithValue }) => {
    try {
      const result = await fetchUsers(page);
      return result;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const updateTweetByIdThunk = createAsyncThunk(
  "users/getTweet",
  async (obj, { rejectWithValue }) => {
    try {
      const result = await updateTweetById(obj);
      return result;
    } catch (error) {
      return rejectWithValue();
    }
  }
);
