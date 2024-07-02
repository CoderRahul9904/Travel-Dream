const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config({path:`../client/configure.env`})
const cors=require('cors')

app.use(express.json())
app.use(cors())

// console.log(process.env.DB)
// console.log(process.env.DB_PASS)


module.exports=app