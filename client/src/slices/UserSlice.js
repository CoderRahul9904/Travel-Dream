import { createSlice } from "@reduxjs/toolkit";

console.log("working")
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
        }
    }
})

export const {login,logout}= userSlice.actions

export default userSlice.reducer