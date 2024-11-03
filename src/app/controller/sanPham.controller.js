import SanPham from "../models/sanPham.model.js";

const SanPhamController = {
  getSanPham: async (req, res, next) => {
    try {
      const { id } = req.params;

      const sanPhamFound = await SanPham.findById(id)
        .populate("chiNhanhApDung")
        .populate("loaiSanPham")
        .populate("thongTinKichThuoc.kichThuoc");

      if (!sanPhamFound) {
        return res.status(404).json({
          success: false,
          message: "Sản phẩm không tồn tại!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Sản phẩm được tìm thấy!",
        result: sanPhamFound,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  getSanPhams: async (req, res, next) => {
    try {
      const sanPhamsFound = await SanPham.find();
      return res.status(200).json({
        success: true,
        message: "Danh sách sản phẩm!",
        result: sanPhamsFound,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  filterSanPhams: async (req, res, next) => {
    try {
      const { page = 1, limit = 20, sortOrder = "" } = req.query;
      const data = req.body;
      let filter = {
        isDel: false,
        trangThai: true,
        ...data.search,
        ...data.category,
      };

      let sort = {};
      if (sortOrder === "date") {
        sort = { createdAt: -1 };
      } else if (sortOrder === "price") {
        sort = { price: 1 };
      } else if (sortOrder === "price-desc") {
        sort = { price: -1 };
      }

      const skip = (Number(page) - 1) * Number(limit);

      const total = await SanPham.countDocuments(filter);

      const sanPhamsFound = await SanPham.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(Number(limit) !== -1 ? limit : total)
        .populate("chiNhanhApDung")
        .populate("loaiSanPham")
        .populate("thongTinKichThuoc.kichThuoc");

      return res.status(200).json({
        success: true,
        message: "Lấy danh sách sản phẩm đã lọc thành công!",
        result: {
          data: sanPhamsFound,
          pagination: {
            total,
            page: Number(page),
            limit: Number(limit),
            totalPages:
              Math.ceil(total / Number(limit)) > 0
                ? Math.ceil(total / Number(limit))
                : 1,
          },
        },
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default SanPhamController;
