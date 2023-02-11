const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

function uploadToCloudinary(locaFilePath, folder, width, height) {
  return cloudinary.uploader
    .upload(locaFilePath, {
      folder: folder,
      width,
      height,
      crop: 'fill',
    })
    .then((result) => {
      fs.unlinkSync(locaFilePath);
      return {
        publickId: result.public_id,
        url: result.secure_url,
      };
    })
    .catch((error) => {
      fs.unlinkSync(locaFilePath);
      return { message: 'Fail', error };
    });
}

module.exports = uploadToCloudinary;
