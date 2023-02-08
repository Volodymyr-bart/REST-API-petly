const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const makeImgUrl = async (file, folder, width, height) => {
  const avatar = await cloudinary.uploader.upload(file, {
    folder,
    width,
    height,
    crop: 'fill',
  });
  return avatar.secure_url;
};
module.exports = makeImgUrl;
