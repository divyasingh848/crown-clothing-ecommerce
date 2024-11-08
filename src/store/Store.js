import { configureStore } from "@reduxjs/toolkit";
import signupReducers from "./features/signup/Signup-slice";

const store = configureStore({
    reducer:{
        signup: signupReducers,
        
    }
})

export default store;