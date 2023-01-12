import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendMessageApi } from "../api/api";

export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (msg) => {
    return sendMessageApi(msg)
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
  extraReducers: {
    // another way of doing it
    // builder.addCase(sendMessage.pending, (state) => {
    //     console.log(state.msg)
    //     console.log("hej")
    // })
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
