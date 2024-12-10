import KichThuoc from "../models/kichThuoc.model.js";

const KichThuocController = {
  getKichThuocs: async (req, res) => {
    try {
      const kichThuocs = await KichThuoc.find();

      if (!kichThuocs) {
        return res.status(404).json({
          success: false,
          message: "Danh sách kích thước trống!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Danh sách kích thước!",
        result: kichThuocs,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default KichThuocController;
