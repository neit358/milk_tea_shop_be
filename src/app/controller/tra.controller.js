import Tra from "../models/tra.model.js";

const TraController = {
  getTras: async (req, res) => {
    try {
      const trasFound = await Tra.find();

      if (!trasFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy trà!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Danh sách trà!",
        result: trasFound,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default TraController;
