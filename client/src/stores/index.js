import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../slices/UserSlice"


console.log("working")
const store = configureStore({
    reducer: {
      user: userReducer,
    },
});

export default store