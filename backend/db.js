const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({ path: '../client/configure.env' })

const DB = process.env.DB.replace('<password>', process.env.DB_PASS)

mongoose.connect(DB)
.then(()=> console.log("Connected to DB"))
.catch(err => console.error("Failed to connect to DB", err));


module.exports= mongoose