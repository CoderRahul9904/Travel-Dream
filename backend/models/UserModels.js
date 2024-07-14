const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phoneNumber: String,
    picture: String,
    address: String,
    dateOfBirth: Date,
    role: { type: String, enum: ['Admin', 'Customer'], default: 'Customer' },
    bookingHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
})


const User=mongoose.model('UserInfo',UserSchema,'UserInfo')

module.exports=User