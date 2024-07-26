import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../slices/UserSlice"


//bye
const store = configureStore({
    reducer: {
      user: userReducer,
    },
});

export default store