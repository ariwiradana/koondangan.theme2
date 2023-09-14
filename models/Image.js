import mongoose from "mongoose";

const schema = new mongoose.Schema({
  filename: String,
  original_filename: String,
  size: Number,
  filetype: String,
  created_at: String,
  type: String,
  user: String,
  url: String,
});

export default mongoose.models.Image || mongoose.model("Image", schema);
