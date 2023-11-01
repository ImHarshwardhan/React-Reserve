import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/ReactReserve'; // Replace with your MongoDB connection string

async function connectToMongoDB() {
  try {
    await mongoose.connect(url,{
        useNewUrlParser : true
    })
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call the function to establish the connection
connectToMongoDB();
export default connectToMongoDB