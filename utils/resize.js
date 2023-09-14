const Jimp = require("jimp");

export async function resizeImage(inputBuffer) {
  try {
    const targetSizeInBytes = 500000;
    let image = await Jimp.read(inputBuffer);
    const quality = 80; // Adjust the quality as needed to reach the target size

    while (
      Buffer.from(await image.getBufferAsync(Jimp.MIME_JPEG)).length >
      targetSizeInBytes
    ) {
      // Resize the image while its size is larger than the target size
      image.quality(quality);
      image.scale(0.9); // You can adjust the scaling factor as needed
    }

    return await image.getBufferAsync(Jimp.MIME_JPEG);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
