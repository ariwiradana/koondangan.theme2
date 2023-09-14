const Jimp = require("jimp");

export async function resizeImage(inputBuffer) {
  try {
    const targetSizeInBytes = 500000;
    let image = await Jimp.read(inputBuffer);
    const quality = 80;

    while (
      Buffer.from(await image.getBufferAsync(Jimp.MIME_JPEG)).length >
      targetSizeInBytes
    ) {
      image.quality(quality);
      image.scale(0.8);
    }

    return await image.getBufferAsync(Jimp.MIME_JPEG);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
