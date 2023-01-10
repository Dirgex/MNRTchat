import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { sendUsernameApi } from '../api/api'

export const sendUsername = createAsyncThunk(
    "username/sendUsername",
    async (username) => {
      return sendUsernameApi(username);
    }
  );


export const usernameSlice = createSlice({
  name: "username",
  initialState: {
    user: '',
  },

  reducers: {
    setUsername: (state, action) => {
        state.user = action.payload;
        console.log(action.payload);
    },
  },
});

export const { setUsername } = usernameSlice.actions;

export default usernameSlice.reducer;
