import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    msg: '',
    storemsg: 'hej',
  },

  reducers: {
    setMessage: (state, action) => {
        state.msg = action.payload;
        console.log(action.payload);
    },

    sendMessage: (state) => {
        state.storemsg = state.msg;
        state.msg = '';
        console.log(state.storemsg);
    }

  },
});

export const { setMessage, sendMessage } = messageSlice.actions;

export default messageSlice.reducer;
