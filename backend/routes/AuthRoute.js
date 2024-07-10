const express=require('express')
const AuthRoute=express.Router()


AuthRoute
    .route('/get-info')
    .get()






module.exports=AuthRoute