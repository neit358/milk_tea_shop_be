const NguoiDungController = {
  getNguoiDung: async (req, res, next) => {
    try {
      const { id } = req.params;
      const nguoiDungFound = await NguoiDung.findById(id);
      if (!nguoiDungFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy người dùng!",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Lấy người dùng thành công!",
        result: nguoiDungFound,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default NguoiDungController;
