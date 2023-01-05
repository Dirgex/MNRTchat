import { createSlice } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
  name: "username",
  initialState: {
    name: '',
  },

  reducers: {
    setusername: (state, action) => {
        state.name = action.payload
        console.log(action.payload);
    },
  },
});

export const { setusername } = usernameSlice.actions;

export default usernameSlice.reducer;
