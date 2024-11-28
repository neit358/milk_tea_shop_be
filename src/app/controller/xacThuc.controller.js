import NguoiDung from "../models/nguoiDung.model.js";
import bcrypt from "bcrypt";
import omit from "lodash/omit.js";

const XacThucController = {
  register: async (req, res, next) => {
    try {
      const nguoiDungFound = await NguoiDung.findOne({ sdt: req.body.sdt });
      if (nguoiDungFound) {
        return res.status(200).json({
          success: false,
          message: "Tài khoản đã tồn tại!",
        });
      }

      const hashPassword = bcrypt.hashSync(req.body.matKhau, 10);
      const user = { ...req.body, matKhau: hashPassword };
      const userCreated = await NguoiDung.create(user);

      const userResponse = omit(userCreated.toObject(), ["matKhau"]);

      return res.status(200).json({
        success: true,
        message: "Thêm tài khoản thành công!",
        result: userResponse,
      });
    } catch {
      const error = new Error("Đăng kí tài khoản không thành công!");
      error.status = 500;
      next(error);
      return;
    }
  },

  login: async (req, res, next) => {
    try {
      const nguoiDungFound = await NguoiDung.findOne({ sdt: req.body.sdt });

      if (!nguoiDungFound) {
        return res.status(404).json({
          success: false,
          message: "Tài khoản chưa tồn tại!",
        });
      }

      const checkPassword = bcrypt.compareSync(
        req.body.matKhau,
        nguoiDungFound.matKhau
      );

      if (!checkPassword) {
        return res.status(401).json({
          success: false,
          message: "Mật khẩu không chính xác!",
        });
      }

      const userResponse = omit(nguoiDungFound.toObject(), ["matKhau"]);

      req.session.user = userResponse;

      res.status(200).json({
        success: true,
        message: "Đăng nhập thành công!",
        result: userResponse,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  logout: async (req, res, next) => {
    if (req.session.user) {
      req.session.destroy((err) => {
        if (err) {
          return res.status(401).json({
            success: false,
            message: "Lỗi khi đăng xuất!",
          });
        }
      });
      return res.status(200).json({
        success: true,
        message: "Đăng xuất thành công!",
      });
    }
    const error = new Error("Không thể đăng xuất!");
    error.status = 401;
    next(error);
    return;
  },

  checkAuth: async (req, res, next) => {
    if (req.session.user) {
      const nguoiDungFound = await NguoiDung.findOne({
        sdt: req.session.user.sdt,
      });

      if (!nguoiDungFound) {
        req.session.destroy();
        return res.status(401).json({
          success: false,
          message: "Tài khoản không tồn tại!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Đã đăng nhập!",
        result: req.session.user,
      });
    }

    return res.status(200).json({
      success: false,
      message: "Chưa đăng nhập!",
    });
  },
};

export default XacThucController;
