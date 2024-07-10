import { createSlice } from "@reduxjs/toolkit";

console.log("its slice")
const userSlice=createSlice({
    name: "user",
    initialState:{isLoggedIn: false,googleToken: null,},
    reducers:{
        login(state,action){
            state.isLoggedIn = true;
            state.googleToken = action.payload.googleToken;
        },
        logout(state,action){
            state.isLoggedIn = false;
            state.googleToken = null;
        },
        setToken(state, action) {
            state.googleToken = action.payload.googleToken;
            state.isLoggedIn = !!action.payload.googleToken;
        },
    }
})

export const {login,logout, setToken}= userSlice.actions

export default userSlice.reducer