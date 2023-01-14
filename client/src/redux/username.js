import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const usernameSlice = createSlice({
  name: "username",
  initialState: {
    user: "",
    userlist: [],
    isLoading: false,
    userid: "",

  },

  reducers: {
    setUsername: (state, action) => {
      state.user = action.payload;
      state.userid = uuidv4();
    },

    setUserlist: (state, action) => {
      return {
        ...state,
        userlist: [...state.userlist, action.payload],
      };
    },

    getUserlist: (state) => {
      return {
        ...state,
        userlist: [...state.userlist],
      };
    },
    deleteUserFromList: (state, action) => {
      return {
        ...state,
        userlist: state.userlist.filter((item) => item !== action.payload),
      };
    },

    updateUserlistOnBack: (state) => {
      state.userlist = [];
    },
  },

});

export const {
  setUsername,
  setUserlist,
  getUserlist,
  deleteUserFromList,
  updateUserlistOnBack,
} = usernameSlice.actions;

export default usernameSlice.reducer;
