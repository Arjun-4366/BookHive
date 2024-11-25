import mongoose from "mongoose";

const connectToDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected to db");
  }
  return;
};
try {
  await mongoose.connect(process.env.MONGO_URL as string);
  console.log("db connected successfully");
} catch (error) {
  console.log("error connecting to database");
  throw error;
}

export default connectToDB;
