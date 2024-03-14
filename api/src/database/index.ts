import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Arvinbuyn:Aagii1215@arvinbuyn.z1bszfh.mongodb.net/Ecommerce?retryWrites=true&w=majority"
    );
    console.log("Database Connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};
