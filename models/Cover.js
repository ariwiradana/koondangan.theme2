import mongoose from "mongoose";

const coverSchema = new mongoose.Schema({
  title: String,
  user: String,
  base64: String,
});

export default mongoose.models.Cover || mongoose.model("Cover", coverSchema);
