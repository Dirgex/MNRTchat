import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendUsernameApi, getUserlistApi, deleteUserApi } from "../api/api";

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

export const deleteUser = createAsyncThunk(
    "username/deleteUser",
    async(username) => {
        return deleteUserApi(username);
    }
)

export const usernameSlice = createSlice({
  name: "username",
  initialState: {
    user: "",
    userlist: [],
    isLoading: false,
    //usercount: "",
  },

  reducers: {
    setUsername: (state, action) => {
      state.user = action.payload;
    },

    // setUsercount: (state,action) => {
    //     state.usercount = action.payload;
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

export const { setUsername, /*setUsercount*/ } = usernameSlice.actions;

export default usernameSlice.reducer;
