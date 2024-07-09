import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://mnovikov0195:IZDczskqENB5GrYG@cluster0.1ju4xsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
  } catch (error) {
    console.log(error.message);
  }
};

export default connect;
