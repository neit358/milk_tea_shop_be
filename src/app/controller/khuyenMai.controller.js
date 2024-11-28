import KhuyenMai from "../models/khuyenMai.model.js";
import SanPham from "../models/sanPham.model.js";

const khuyenMaiController = {
  getKhuyenMai: async (req, res, next) => {
    try {
      const { id } = req.params;
      const khuyenMaiFound = await KhuyenMai.findById({
        _id: id,
        isDel: false,
      });

      if (!khuyenMaiFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy khuyến mãi!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Lấy khuyến mãi thành công!",
        result: khuyenMaiFound,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  getKhuyenMais: async (req, res, next) => {
    try {
      const khuyenMaiListFound = await KhuyenMai.find({ isDel: false });
      return res.status(200).json({
        success: true,
        message: "Lấy danh sách khuyến mãi thành công!",
        result: khuyenMaiListFound,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  createKhuyenMai: async (req, res, next) => {
    try {
      const data = req.body;
      const khuyenMaiCreated = await KhuyenMai.create(data);

      if (!khuyenMaiCreated) {
        return res.status(404).json({
          success: false,
          message: "Thêm khuyến mãi không thành công!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Thêm khuyến mãi thành công!",
        result: khuyenMaiCreated,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  updateKhuyenMai: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const khuyenMaiUpdated = await KhuyenMai.findByIdAndUpdate(id, data);

      if (!khuyenMaiUpdated) {
        return res.status(404).json({
          success: false,
          message: "Cập nhật khuyến mãi không thành công!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Cập nhật khuyến mãi thành công!",
        result: khuyenMaiUpdated,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  applyPromotions: async (req, res, next) => {
    try {
      const { idPromotion } = req.params;
      const data = req.body;
      const khuyenMaiFound = await KhuyenMai.findById(id);

      if (!khuyenMaiFound) {
        return res.status(404).json({
          success: false,
          message: "Khuyến mãi không tồn tại!",
        });
      }

      const { danhSachKhuyenMai, type } = data;

      if (type !== "orderDiscount") {
        const productsPromotion = await Promise.all(
          danhSachKhuyenMai.map(async (id) => {
            try {
              const productPromotion =
                type === "categoryDiscount"
                  ? await SanPham.updateMany(
                      {
                        loaiSanPham: id,
                      },
                      {
                        $push: {
                          khuyenMai: idPromotion,
                        },
                      }
                    )
                  : await SanPham.findByIdAndUpdate(
                      {
                        _id: id,
                      },
                      {
                        $push: {
                          khuyenMai: idPromotion,
                        },
                      }
                    );
              if (!productPromotion) return null;

              return productPromotion;
            } catch {
              return null;
            }
          })
        );

        if (!productsPromotion) {
          return res.status(404).json({
            success: false,
            message: "Áp dụng khuyến mãi không thành công!",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Áp dụng khuyến mãi thành công!",
          result: productsPromotion,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  deleteKhuyenMai: async (req, res, next) => {
    try {
      const { id } = req.params;
      const khuyenMaiFound = await KhuyenMai.findById(id);

      if (!khuyenMaiFound) {
        return res.status(404).json({
          success: false,
          message: "Khuyến mãi không tồn tại!",
        });
      }

      const khuyenMaiDeleted = await KhuyenMai.findByIdAndUpdate(id, {
        isDel: true,
      });

      if (!khuyenMaiDeleted) {
        return res.status(404).json({
          success: false,
          message: "Xóa khuyến mãi không thành công!",
        });
      }

      return res.status(200).json({
        message: "Xóa khuyến mãi thành công!",
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },
};

export default khuyenMaiController;
