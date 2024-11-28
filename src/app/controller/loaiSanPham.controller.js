import LoaiSanPham from "../models/loaiSanPham.model.js";

const LoaiSanPhamController = {
  getLoaiSanPham: async (req, res) => {
    try {
      const { id } = req.params;

      const loaiSanPhamFound = await LoaiSanPham.findOne({
        _id: id,
        isDel: false,
      });

      if (!loaiSanPhamFound) {
        return res.status(404).json({
          success: false,
          message: "Loại sản phẩm không tồn tại!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Loại sản phẩm được tìm thấy!",
        result: loaiSanPhamFound,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  getLoaiSanPhams: async (req, res) => {
    try {
      const loaiSanPhams = await LoaiSanPham.find({
        isDel: false,
      });
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

  deleteLoaiSanPham: async (req, res) => {
    try {
      const { id } = req.params;

      const loaiSanPhamFound = await LoaiSanPham.findById(id);
      if (!loaiSanPhamFound) {
        return res.status(404).json({
          success: false,
          message: "Loại sản phẩm không tồn tại!",
        });
      }
      const loaiSanPhamUpdated = await LoaiSanPham.findByIdAndUpdate(id, {
        isDel: true,
      });

      if (!loaiSanPhamUpdated) {
        return res.status(404).json({
          success: false,
          message: "Xóa loại sản phẩm không thành công!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Xóa loại sản phẩm thành công!",
        result: loaiSanPhamUpdated,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  updateLoaiSanPham: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const loaiSanPhamFound = await LoaiSanPham.findById(id);
      if (!loaiSanPhamFound) {
        return res.status(404).json({
          success: false,
          message: "Loại sản phẩm không tồn tại!",
        });
      }
      const loaiSanPhamUpdated = await LoaiSanPham.findByIdAndUpdate(id, data);

      if (!loaiSanPhamUpdated) {
        return res.status(404).json({
          success: false,
          message: "Cập nhật loại sản phẩm không thành công!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Cập nhật loại sản phẩm thành công!",
        result: loaiSanPhamUpdated,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  createLoaiSanPham: async (req, res, next) => {
    try {
      const data = req.body;

      const loaiSanPhamCreated = await LoaiSanPham.create(data);

      if (!loaiSanPhamCreated) {
        return res.status(404).json({
          success: false,
          message: "Tạo loại sản phẩm không thành công!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Tạo loại sản phẩm thành công!",
        result: loaiSanPhamCreated,
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
