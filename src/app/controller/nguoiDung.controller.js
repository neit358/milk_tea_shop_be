import omit from "lodash/omit.js";
import NguoiDung from "../models/nguoiDung.model.js";
import bcrypt from "bcrypt";

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

  updateNguoiDung: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { sdt, ...docs } = req.body;

      const nguoiDungExisted = await NguoiDung.findOne({ sdt });

      if (nguoiDungExisted && nguoiDungExisted._id != id) {
        return res.status(400).json({
          success: false,
          message: "Số điện thoại đã tồn tại!",
        });
      }

      const nguoiDungFound = await NguoiDung.findById(id);
      if (!nguoiDungFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy người dùng!",
        });
      }

      const nguoiDungUpdate = await NguoiDung.findByIdAndUpdate(id, docs, {
        new: true,
      }).populate("vaiTro");

      if (!nguoiDungUpdate) {
        return res.status(400).json({
          success: false,
          message: "Cập nhật người dùng không thành công!",
        });
      }

      const nguoiDungResponse = omit(nguoiDungUpdate.toObject(), ["matKhau"]);
      req.session.user = nguoiDungResponse;

      return res.status(200).json({
        success: true,
        message: "Cập nhật người dùng thành công!",
        result: nguoiDungResponse,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  changePassword: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { matKhauCu, matKhauMoi } = req.body;

      const nguoiDungFound = await NguoiDung.findById(id);
      if (!nguoiDungFound) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy người dùng!",
        });
      }

      const isMatch = bcrypt.compareSync(matKhauCu, nguoiDungFound.matKhau);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Mật khẩu cũ không chính xác!",
        });
      }

      const hashPassword = bcrypt.hashSync(matKhauMoi, 10);

      const nguoiDungUpdate = await nguoiDungFound.updateOne({
        matKhau: hashPassword,
      });

      if (!nguoiDungUpdate) {
        return res.status(400).json({
          success: false,
          message: "Đổi mật khẩu không thành công!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Đổi mật khẩu thành công!",
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
