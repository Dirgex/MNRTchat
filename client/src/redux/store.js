import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from './username';
import messageReducer from './message'

export default configureStore({
    reducer : {
        username: usernameReducer,
        message: messageReducer
    }
})