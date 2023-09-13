import connectDB from "@/config/db";
import Thumbnail from "@/models/Thumbnail";

connectDB();

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const { user } = req.query;
        const data = await Thumbnail.find({ user });
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: "Unable to fetch thumbnails." });
      }
      break;
    case "POST":
      try {
        const { title, user, base64 } = req.body;
        if (!base64 || !user || !title) {
          res.status(400).json({
            error: true,
            message: "Base64 image and title are required fields.",
          });
          return;
        }
        const newCover = new Thumbnail({
          title,
          user,
          base64,
        });
        const savedCover = await newCover.save();

        res.status(201).json(savedCover);
      } catch (error) {
        res.status(500).json({ error: true, message: error.message });
      }
      break;
    default:
      res.status(404).json({ error: true, message: "Route not found" });
      break;
  }
};
