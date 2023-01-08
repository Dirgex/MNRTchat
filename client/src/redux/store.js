import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from './username';
import messageReducer from './message'
import chatlogReducer from './chatlog'

export default configureStore({
    reducer : {
        username: usernameReducer,
        message: messageReducer,
        chatlog: chatlogReducer
    }
})