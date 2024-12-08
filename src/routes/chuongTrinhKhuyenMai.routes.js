import { Router } from "express";
import chuongTrinhKhuyenMaiController from "../app/controller/chuongTrinhKhuyenMai.controller.js";

const route = Router();

route.post("/", chuongTrinhKhuyenMaiController.createChuongTrinhKhuyenMai);

route.get("/", chuongTrinhKhuyenMaiController.getChuongTrinhKhuyenMais);

export default route;
