import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`databazaya baglandi ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
