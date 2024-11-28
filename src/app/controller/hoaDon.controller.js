import HoaDon from "../models/hoaDon.model.js";
import { ObjectId } from "mongodb";

const hoaDonController = {
  getHoaDonById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const hoaDonFound = await HoaDon.findById({
        _id: id,
        isDel: false,
      }).populate("trangThai");

      if (!hoaDonFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy đơn hàng!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Lấy danh sách đơn hàng thành công!",
        result: hoaDonFound,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  getHoaDon: async (req, res, next) => {
    try {
      const hoaDonFound = await HoaDon.find({
        nguoiDung: req.session.user.id,
        isDel: false,
      }).populate("trangThai");

      if (!hoaDonFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy đơn hàng!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Lấy danh sách đơn hàng thành công!",
        result: hoaDonFound,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  getHoaDons: async (req, res, next) => {
    try {
      const hoaDonsFound = await HoaDon.find({ isDel: false }).populate(
        "trangThai"
      );

      if (!hoaDonsFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy đơn hàng!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Lấy danh sách đơn hàng thành công!",
        result: hoaDonsFound,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  filterHoaDons: async (req, res, next) => {
    try {
      const data = req.body;

      let filter = {
        isDel: false,
        ...data,
      };

      const hoaDonsFound = await HoaDon.find(filter).populate("trangThai");

      if (!hoaDonsFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy đơn hàng!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Lấy danh sách đơn hàng thành công!",
        result: hoaDonsFound,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  reportHoaDons: async (req, res, next) => {
    try {
      const filter = req.body;

      const filterData =
        filter[2].$match["items.sanPham.loaiSanPham"] &&
        filter[2].$match["items.sanPham._id"]
          ? {
              "items.sanPham.loaiSanPham": new ObjectId(
                filter[2].$match["items.sanPham.loaiSanPham"]
              ),
              "items.sanPham._id": new ObjectId(
                filter[2].$match["items.sanPham._id"]
              ),
            }
          : filter[2].$match["items.sanPham.loaiSanPham"] &&
            !filter[2].$match["items.sanPham._id"]
          ? {
              "items.sanPham.loaiSanPham": new ObjectId(
                filter[2].$match["items.sanPham.loaiSanPham"]
              ),
            }
          : filter[2].$match["items.sanPham._id"] &&
            !filter[2].$match["items.sanPham.loaiSanPham"]
          ? {
              "items.sanPham._id": new ObjectId(
                filter[2].$match["items.sanPham._id"]
              ),
            }
          : {};

      filter[0].$match = {
        ...filter[0].$match,
        createdAt: {
          $gte: new Date(filter[0].$match.createdAt.$gte),
          $lte: new Date(filter[0].$match.createdAt.$lte),
        },
      };

      filter[2].$match = {
        ...filterData,
      };

      const hoaDonsFound = await HoaDon.aggregate([
        {
          $match: filter[0].$match,
        },
        {
          $unwind: filter[1].$unwind,
        },
        {
          $match: filter[2].$match,
        },
        {
          $group: filter[3].$group,
        },
        {
          $project: filter[4].$project,
        },
        {
          $sort: filter[5].$sort,
        },
      ]);

      if (!hoaDonsFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy đơn hàng!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Lấy danh sách đơn hàng thành công!",
        result: hoaDonsFound,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  addHoaDon: async (req, res, next) => {
    try {
      const data = req.body;
      const hoaDonCreated = await HoaDon.create(data);

      if (!hoaDonCreated) {
        return res.status(400).json({
          success: false,
          message: "Tạo đơn hàng không thành công!",
        });
      }

      return res.status(201).json({
        success: true,
        message: "Tạo đơn hàng thành công!",
        result: hoaDonCreated,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  updateHoaDon: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const hoaDonFound = await HoaDon.findById(id);
      if (!hoaDonFound) {
        return res.status(404).json({
          success: false,
          message: "Đơn hàng không tồn tại!",
        });
      }

      const hoaDonUpdated = await HoaDon.findByIdAndUpdate(id, data);
      if (!hoaDonUpdated) {
        return res.status(404).json({
          success: false,
          message: "Cập nhật đơn hàng không thành công!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Cập nhật đơn hàng thành công!",
        result: hoaDonUpdated,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },

  deleteHoaDon: async (req, res, next) => {
    try {
      const { id } = req.params;
      const hoaDonFound = await HoaDon.findById(id);
      if (!hoaDonFound) {
        return res.status(404).json({
          success: false,
          message: "Đơn hàng không tồn tại!",
        });
      }

      const hoaDonDeleted = await HoaDon.findByIdAndUpdate(id, {
        isDel: true,
      });

      if (!hoaDonDeleted) {
        return res.status(404).json({
          success: false,
          message: "Hủy đơn hàng không thành công!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Hủy đơn hàng thành công!",
        result: hoaDonDeleted,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  },
};

export default hoaDonController;
