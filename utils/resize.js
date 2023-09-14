const Jimp = require("jimp");


export async function resizeImage(inputFilePath, percentage) {
  try {
    // Read the original image
    const image = await Jimp.read(inputFilePath);

    // Calculate new dimensions based on the percentage
    const newWidth = Math.round(image.getWidth() * (percentage / 100));
    const newHeight = Math.round(image.getHeight() * (percentage / 100));

    // Resize the image
    image.resize(newWidth, newHeight);

    // Get the resized image as a buffer
    const resizedBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);
    return resizedBuffer;

    // Use resizedBuffer for further processing or return it as needed
  } catch (error) {
    console.error("Error resizing image:", error);
  }
}
