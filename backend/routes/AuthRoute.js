const express=require('express')
const AuthRoute=express.Router()

console.log('working')
AuthRoute
    .route('/get-info')
    .get()






module.exports=AuthRoute