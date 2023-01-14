import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendMessageApi } from "../api/api";

//createAsyncThunk when using api calls as a redux middleware
export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (msg) => {
    return sendMessageApi(msg);
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    msg: "",
    isLoading: false,
    error: null,
  },

  reducers: {
    setMessage: (state, action) => {
      state.msg = action.payload;
    },
  },
  // Extrareducers required for createasyncthunk
  extraReducers: {
    [sendMessage.pending]: (state) => {
      state.isLoading = true;
    },
    [sendMessage.fulfilled]: (state) => {
      state.msg = "";
      state.isLoading = false;
    },
    [sendMessage.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
