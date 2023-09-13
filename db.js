import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    });
    const connectedHost = mongoose.connection.host;
    console.log(`Connected to MongoDB server at host: ${connectedHost}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connectDB;
