import mongoose from "mongoose";

export async function connectDb() {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connect to mongoDb`);
  } catch (error) {
    console.log("Error connecting mongoDb ", error);
    process.exit(1);
  }
}
