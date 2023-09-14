import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/db";
import Image from "@/models/Image";
import { resizeImage } from "@/utils/resize";
import formidable from "formidable";

connectDB();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const { user, type } = req.query;
        const data = await Image.find({ user, type });
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: "Unable to fetch images." });
      }
      break;
    case "POST":
      try {
        const form = formidable({});
        const [fields, files] = await form.parse(req);

        const newImage = files?.image[0];
        const type = fields?.type[0];
        const user = fields?.user[0];

        console.log("Resize image...")
        const resizedImage = await resizeImage(newImage.filepath, 50);

        const folder = "koondangan";
        const options = {
          unique_filename: true,
          overwrite: true,
          folder,
          resource_type: "image",
        };

        console.log("Upload image to cloudinary...");
        const uploadedImage = await uploadToCloudinary(resizedImage, options);

        const newCover = new Image({
          original_filename: newImage?.originalFilename,
          filename: uploadedImage?.public_id,
          size: uploadedImage?.bytes,
          filetype: uploadedImage?.format,
          created_at: uploadedImage?.created_at,
          user,
          type,
          url: uploadedImage?.url,
        });

        console.log("Upload image to mongodb...");
        const savedCover = await newCover.save();
        res.status(201).json(savedCover);
        console.log(savedCover);
      } catch (error) {
        res.status(500).json({ error: true, message: error.message });
      }
      break;
    case "DELETE":
      const { filename } = req.query;

      if (!filename) {
        res.status(400).json({
          error: true,
          message: "Missing query parameter.",
        });
      }

      const deletedImageCloudinary = await cloudinary.api.delete_resources(
        [filename],
        {
          type: "upload",
          resource_type: "image",
        }
      );

      const deletedDocument = await Image.findOneAndDelete({
        filename,
      });

      res.status(201).json(deletedDocument);
      break;
    default:
      res.status(404).json({ error: true, message: "Route not found" });
      break;
  }
};

async function uploadToCloudinary(buffer, options) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) {
          return error.message;
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    uploadStream.end(buffer);
  });
}
