import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDbURL = process.env.MONGO_URI as string;

export default (async () => {
  try {
    await mongoose.connect(mongoDbURL);
    console.log("mongodb Connected!!!");
  } catch (error) {
    console.log("error :>> ", error);
    process.exit(1);
  }
})();
