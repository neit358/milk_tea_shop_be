import GioHang from "../models/gioHang.model.js";

const gioHangController = {
  getGioHangs: async (req, res, next) => {
    try {
      const { id } = req.params;
      const gioHangFound = await GioHang.findOne({ nguoiDung: id })
        .populate({
          path: "items.sanPham",
          populate: {
            path: "khuyenMai",
            model: "KhuyenMai",
          },
        })
        .populate("items.thongTinKichThuoc.kichThuoc")
        .populate("items.thongTinTopping.topping")
        .populate("items.ngot")
        .populate("items.da")
        .populate("items.tra");
      if (!gioHangFound) {
        return res.status(200).json({
          success: false,
          message: "Danh sách giỏ hàng chưa có sản phẩm nào!",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Lấy thông tin danh sách giỏ hàng thành công!",
        result: gioHangFound,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  addGioHang: async (req, res, next) => {
    try {
      const item = req.body;

      const gioHangFound = await GioHang.findOne({
        nguoiDung: req.session.user._id,
      });

      if (!gioHangFound) {
        const newGioHang = new GioHang({
          nguoiDung: req.session.user._id,
          items: [item],
        });
        const gioHangCreated = await newGioHang.save();

        if (!gioHangCreated) {
          return res.status(400).json({
            success: false,
            message: "Không thể thêm vào danh sách giỏ hàng!",
          });
        }

        return res.status(201).json({
          success: true,
          message: "Thêm vào danh sách giỏ hàng thành công!",
          result: gioHangCreated,
        });
      }

      const gioHangUpdatedWithNewItem = await GioHang.findOneAndUpdate(
        {
          nguoiDung: req.session.user._id,
        },
        {
          $push: {
            items: item,
          },
        }
      );

      if (!gioHangUpdatedWithNewItem) {
        return res.status(400).json({
          success: false,
          message: "Không thể thêm vào danh sách giỏ hàng!",
        });
      }
      return res.status(201).json({
        success: true,
        message: "Thêm vào danh sách giỏ hàng thành công!",
        result: gioHangUpdatedWithNewItem,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  deleteGioHang: async (req, res, next) => {
    try {
      const data = req.body;
      const { id } = req.params;

      const gioHangFound = await GioHang.findOne({ _id: id });
      if (!gioHangFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy danh sách giỏ hàng!",
        });
      }

      const gioHangUpdate = await GioHang.findOneAndUpdate(
        { _id: id },
        {
          $pull: { items: { _id: data.id } },
        }
      );

      if (!gioHangUpdate) {
        return res.status(400).json({
          success: false,
          message: "Xóa danh sách giỏ hàng không thành công!",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Xóa danh sách giỏ hàng thành công!",
        result: gioHangUpdate,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  updateGioHang: async (req, res, next) => {
    const id = req.params.id;
    const { idItem, ...itemUpdate } = req.body;

    try {
      const gioHangFound = await GioHang.findOne({ _id: id });
      if (!gioHangFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy danh sách giỏ hàng!",
        });
      }

      const gioHangUpdated = await GioHang.findOneAndUpdate(
        { _id: id, "items._id": idItem },
        {
          "items.$": itemUpdate,
        }
      );

      if (!gioHangUpdated) {
        return res.status(400).json({
          success: false,
          message: "Cập nhật danh sách giỏ hàng không thành công!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Cập nhật danh sách giỏ hàng thành công!",
        result: gioHangUpdated,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default gioHangController;
