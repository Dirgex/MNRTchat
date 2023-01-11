import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendUsernameApi, getUserlistApi } from "../api/api";

export const sendUsername = createAsyncThunk(
  "username/sendUsername",
  async (username) => {
    return sendUsernameApi(username);
  }
);

export const getUserlist = createAsyncThunk(
  "username/getUserList",
  async () => {
    let res = await getUserlistApi();
    let data = res.data;
    return data;
  }
);

export const usernameSlice = createSlice({
  name: "username",
  initialState: {
    user: "",
    userlist: [],
    isLoading: false,
  },

  reducers: {
    setUsername: (state, action) => {
      state.user = action.payload;
    },
    // setUserlist: (state,action) => {
    //     return{
    //         ...state,
    //         userlist: [...state.userlist, action.payload],
    //        }
    // }
  },
  extraReducers: {
    [getUserlist.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserlist.fulfilled]: (state,action) => {
    state.userlist = action.payload;
    state.isLoading = false;

    },
    [getUserlist.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setUsername} = usernameSlice.actions;

export default usernameSlice.reducer;
