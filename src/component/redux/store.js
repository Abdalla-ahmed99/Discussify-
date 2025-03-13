import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./slice/users"
export const storeP = configureStore({
    reducer:{
        postReducer
    }
})