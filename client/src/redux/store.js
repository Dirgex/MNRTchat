import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./username";
import messageReducer from "./message";
import chatlogReducer from "./chatlog";

//Setting up our redux store
export default configureStore({
  reducer: {
    username: usernameReducer,
    message: messageReducer,
    chatlog: chatlogReducer,
  },
});
