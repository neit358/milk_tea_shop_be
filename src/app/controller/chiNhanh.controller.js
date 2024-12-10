import ChiNhanh from "../models/chiNhanh.model.js";

const ChiNhanhController = {
  getChiNhanhs: async (req, res) => {
    try {
      const chiNhanhs = await ChiNhanh.find();

      if (!chiNhanhs) {
        return res.status(400).json({
          success: false,
          message: "Không tìm thấy chi nhánh!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Danh sách chi nhánh!",
        result: chiNhanhs,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default ChiNhanhController;
