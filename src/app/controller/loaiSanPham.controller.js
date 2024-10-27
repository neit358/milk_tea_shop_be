import LoaiSanPham from "../models/loaiSanPham.model.js";

const LoaiSanPhamController = {
  getLoaiSanPhams: async (req, res) => {
    try {
      const loaiSanPhams = await LoaiSanPham.find();
      return res.status(200).json({
        success: true,
        message: "Danh sách loại sản phẩm!",
        result: loaiSanPhams,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default LoaiSanPhamController;
