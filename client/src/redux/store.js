import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from './username';

export default configureStore({
    reducer : {
        username: usernameReducer,
    }
})