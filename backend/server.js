const app=require('./app')
const mongoose=require('./db')
const User=require('./models/UserModels')

async function handleALlData(){
    try{
        const allData=await User.find()
        console.log(allData)
    }catch(err){
        console.log(err)
    }
}

handleALlData()

const PORT=process.env.PORT || 3000
app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server is created, Sucessfully")
    }else{
        console.log("Failed to create Server")
    }
})