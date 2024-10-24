import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../../config/cloudinary/cloudinaryConfig.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "rooms",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage: storage });

export const uploadImage = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Tải lên thành công!",
      url: req.file.path,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Đã xảy ra lỗi khi tải lên tệp.",
      error: error.message,
    });
  }
};

export default upload;
