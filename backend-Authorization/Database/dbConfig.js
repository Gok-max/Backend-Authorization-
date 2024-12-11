import mongoose from 'mongoose';


const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected Successfully");
        
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;