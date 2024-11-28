import Tra from "../models/tra.model.js";

const TraController = {
  getTras: async (req, res) => {
    try {
      const trasFound = await Tra.find();
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
