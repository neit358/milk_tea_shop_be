import nguoiDung from "./nguoiDung.routes.js";
import sanPham from "./sanPham.routes.js";
import chiNhanh from "./chiNhanh.routes.js";
import loaiSanPham from "./loaiSanPham.routes.js";
import kichThuoc from "./kichThuoc.routes.js";
import xacThuc from "./xacThuc.routes.js";
import gioHang from "./gioHang.routes.js";
const route = "/api/v1";

function routes(app) {
  app.use(`${route}/cart`, gioHang);

  app.use(`${route}/size`, kichThuoc);

  app.use(`${route}/type`, loaiSanPham);

  app.use(`${route}/branch`, chiNhanh);

  app.use(`${route}/product`, sanPham);

  app.use(`${route}/auth`, xacThuc);

  app.use(`${route}/user`, nguoiDung);

  app.get(route, (req, res, next) => {
    res.json("Hello word!");
  });
}

export default routes;
