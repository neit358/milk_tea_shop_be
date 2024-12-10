import Ngot from "../models/ngot.model.js";

const NgotController = {
  getNgots: async (req, res) => {
    try {
      const ngots = await Ngot.find();

      if (!ngots) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy ngot!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Danh sách ngotj!",
        result: ngots,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default NgotController;
