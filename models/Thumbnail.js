import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  user: String,
  base64: String,
});

export default mongoose.models.Thumbnail || mongoose.model("Thumbnail", schema);
