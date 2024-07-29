import mongoose, { connect } from "mongoose"

export  const connectDB = async()=>{
    await mongoose.connect('mongodb://localhost/Edu').then(()=>console.log('DB is connected'))
}