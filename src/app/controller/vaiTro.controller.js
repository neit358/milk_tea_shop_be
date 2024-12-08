import VaiTro from "../models/vaiTro.model.js";

const VaiTroController = {
  getVaiTros: async (req, res) => {
    try {
      const VaiTros = await VaiTro.find();
      if (!VaiTros) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy vai trò nào!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Lấy danh sách vai trò thành công!",
        result: VaiTros,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default VaiTroController;
