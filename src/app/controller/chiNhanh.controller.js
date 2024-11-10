import ChiNhanh from "../models/chiNhanh.model.js";

const ChiNhanhController = {
  getChiNhanhs: async (req, res) => {
    try {
      const chiNhanhs = await ChiNhanh.find();
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
