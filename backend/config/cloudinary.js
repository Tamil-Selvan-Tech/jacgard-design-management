import { v2 as cloudinary } from "cloudinary";

const hasCloudinaryConfig =
  Boolean(process.env.CLOUDINARY_CLOUD_NAME) &&
  Boolean(process.env.CLOUDINARY_API_KEY) &&
  Boolean(process.env.CLOUDINARY_API_SECRET);

if (hasCloudinaryConfig) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

export const isCloudinaryEnabled = hasCloudinaryConfig;

export const uploadImageToCloudinary = (fileBuffer, folder = "jacgard-designs") =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      }
    );

    stream.end(fileBuffer);
  });

export const deleteImageFromCloudinary = async (publicId) => {
  if (!publicId || !hasCloudinaryConfig) {
    return null;
  }

  return cloudinary.uploader.destroy(publicId);
};
