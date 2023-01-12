import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";



//My own user list making which isnt needed anymore

// export const sendUsername = createAsyncThunk(
//   "username/sendUsername",
//   async (username) => {
//     return sendUsernameApi(username);
//   }
// );

// export const getUserlist = createAsyncThunk(
//   "username/getUserList",
//   async () => {
//     let res = await getUserlistApi();
//     let data = res.data;
//     return data;
//   }
// );

// export const deleteUser = createAsyncThunk(
//     "username/deleteUser",
//     async(username) => {
//         return deleteUserApi(username);
//     }
// )

export const usernameSlice = createSlice({
  name: "username",
  initialState: {
    user: "",
    userlist: [],
    isLoading: false,
    userid: "",
    //usercount: "",
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
      // return{
      //   ...state.userlist.slice(0, action.payload),
      //   ...state.userlist.slice(action.payload +1)
      // }
      //state.userlist.splice(state.userlist.indexOf(action.payload), 1);
      return {
        ...state,
        userlist: state.userlist.filter((item) => item !== action.payload),
      };
    },

    updateUserlistOnBack: (state) => {
      state.userlist = [];
    },

    // setUsercount: (state,action) => {
    //     state.usercount = action.payload;
    // }
  },

  // extra reducers for thunks

  // extraReducers: {
  //   [getUserlist.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getUserlist.fulfilled]: (state,action) => {
  //   state.userlist = action.payload;
  //   state.isLoading = false;

  //   },
  //   [getUserlist.rejected]: (state) => {
  //     state.isLoading = false;
  //   },
  // },
});

export const {
  setUsername,
  setUserlist,
  getUserlist,
  deleteUserFromList,
  updateUserlistOnBack,
} = usernameSlice.actions;

export default usernameSlice.reducer;
