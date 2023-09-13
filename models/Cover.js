import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: String,
  base64: String,
});

export default mongoose.model("Cover", Schema);
