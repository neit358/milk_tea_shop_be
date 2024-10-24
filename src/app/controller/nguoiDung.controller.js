import NguoiDung from "../models/nguoiDung.model.js";
import bcrypt from "bcrypt";

const XacThucController = {
  register: async (req, res, next) => {
    try {
      const nguoiDungFound = await NguoiDung.findOne({
        $or: [{ email: req.body.email }, { username: req.body.username }],
      });
      if (nguoiDungFound) {
        return res.status(200).json({
          success: false,
          message: "Tài khoản đã tồn tại!",
        });
      }

      const hashPassword = bcrypt.hashSync(req.body.password, 10);
      const user = { ...req.body, password: hashPassword };
      const userCreated = await NguoiDung.create(user).select("-password");

      return res.status(200).json({
        success: true,
        message: "Thêm tài khoản thành công!",
        result: userCreated,
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
      const nguoiDungFound = await NguoiDung.findOne({
        $or: [{ email: req.body.username }, { username: req.body.username }],
      });

      if (!nguoiDungFound) {
        return res.status(404).json({
          success: false,
          message: "Tài khoản chưa tồn tại!",
        });
      }

      const checkPassword = bcrypt.compareSync(
        req.body.password,
        nguoiDungFound.password
      );

      if (!checkPassword) {
        return res.status(401).json({
          success: false,
          message: "Mật khẩu không chính xác!",
        });
      }

      req.session.user = nguoiDungFound;

      res.status(200).json({
        success: true,
        message: "Đăng nhập thành công!",
        result: nguoiDungFound,
      });
    } catch {
      const error = new Error("Đăng nhập không thành công!");
      error.status = 500;
      next(error);
      return;
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
};

export default XacThucController;
