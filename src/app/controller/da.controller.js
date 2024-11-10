import Da from "../models/da.model.js";

const DaController = {
  getDas: async (req, res) => {
    try {
      const das = await Da.find();
      return res.status(200).json({
        success: true,
        message: "Danh sách da!",
        result: das,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default DaController;
