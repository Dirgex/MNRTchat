import { createSlice } from "@reduxjs/toolkit";

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
