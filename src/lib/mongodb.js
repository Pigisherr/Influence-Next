import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://remisannpaul:pigisher@influence.sxpc2mz.mongodb.net/?retryWrites=true&w=majority&appName=influence"
    );
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
