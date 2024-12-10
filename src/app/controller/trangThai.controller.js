import TrangThai from "../models/trangThai.model.js";

const trangThaiController = {
  getTrangThais: async (req, res, next) => {
    try {
      const trangThaisFound = await TrangThai.find();

      if (!trangThaisFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy trạng thái!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Lấy danh sách trạng thái thành công!",
        result: trangThaisFound,
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },
};

export default trangThaiController;
