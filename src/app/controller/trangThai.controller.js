import TrangThai from "../models/trangThai.model.js";

const trangThaiController = {
  getTrangThais: async (req, res, next) => {
    try {
      const trangThaiFound = await TrangThai.find();

      if (!trangThaiFound) {
        return res
          .status(404)
          .json({ success: false, message: "Trạng thái không tồn tại" });
      }

      return res.status(200).json({
        success: true,
        message: "Lấy danh sách trạng thái thành công!",
        result: trangThaiFound,
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },
};

export default trangThaiController;
