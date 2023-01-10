import { createSlice } from "@reduxjs/toolkit";

export const chatlogSlice = createSlice({
  name: "chatlog",
  initialState: {
    chat: [],
  },

  reducers: {
    setChatlog: (state, action) => {
       return{
        ...state,
        chat: [...state.chat, action.payload],
       }
    },
  },
});

export const { setChatlog } = chatlogSlice.actions;

export default chatlogSlice.reducer;
