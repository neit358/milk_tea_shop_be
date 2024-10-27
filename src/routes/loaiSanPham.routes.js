import { Router } from "express";
import LoaiSanPhamController from "../app/controller/loaiSanPham.controller.js";

const route = Router();

route.get("/", LoaiSanPhamController.getLoaiSanPhams);

export default route;
