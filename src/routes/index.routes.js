import nguoiDung from "./nguoiDung.routes.js";
import sanPham from "./sanPham.routes.js";
import chiNhanh from "./chiNhanh.routes.js";
import loaiSanPham from "./loaiSanPham.routes.js";
import kichThuoc from "./kichThuoc.routes.js";
import xacThuc from "./xacThuc.routes.js";
import gioHang from "./gioHang.routes.js";
import ngot from "./ngot.routes.js";
import da from "./da.routes.js";
import topping from "./topping.routes.js";
import upload from "./upload.routes.js";
import tra from "./tra.routes.js";
import hoaDon from "./hoaDon.routes.js";
import trangThai from "./trangThai.routes.js";
import khuyenMai from "./khuyenMai.routes.js";
const route = "/api/v1";

function routes(app) {
  app.use(`${route}/promotion`, khuyenMai);

  app.use(`${route}/status`, trangThai);

  app.use(`${route}/invoice`, hoaDon);

  app.use(`${route}/tea`, tra);

  app.use(`${route}/upload`, upload);

  app.use(`${route}/topping`, topping);

  app.use(`${route}/ice`, da);

  app.use(`${route}/sweet`, ngot);

  app.use(`${route}/cart`, gioHang);

  app.use(`${route}/size`, kichThuoc);

  app.use(`${route}/category`, loaiSanPham);

  app.use(`${route}/branch`, chiNhanh);

  app.use(`${route}/product`, sanPham);

  app.use(`${route}/auth`, xacThuc);

  app.use(`${route}/user`, nguoiDung);

  app.get(route, (req, res, next) => {
    res.json("Hello word!");
  });
}

export default routes;
