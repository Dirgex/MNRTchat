import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (msg) => {
    return api(msg)
    // return await api(msg)
    // .then((res) => console.log(res.data))
    // .catch(function(error){
    //     if(error.res){
    //         console.log(error.res.data)
    //         console.log(error.res.status)
    //         console.log(error.res.header)
    //     }else{
    //         console.log('error', error.message)
    //     }
    // })
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
      console.log(action.payload);
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
      console.log(state.msg);
    },
    [sendMessage.rejected]: (state) => {
      console.log(state);
      state.isLoading = false;
    },
  },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
