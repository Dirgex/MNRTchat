import { createSlice } from "@reduxjs/toolkit";

//Create a redux slice for chatlog
export const chatlogSlice = createSlice({
  name: "chatlog",
  initialState: {
    chat: [],
  },

  //Reducers and actions
  reducers: {
    setChatlog: (state, action) => {
      return {
        ...state,
        chat: [...state.chat, action.payload],
      };
    },
  },
});

export const { setChatlog } = chatlogSlice.actions;

export default chatlogSlice.reducer;
