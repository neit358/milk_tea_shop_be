import { Router } from "express";
import LoaiSanPhamController from "../app/controller/loaiSanPham.controller.js";

const route = Router();

route.patch("/delete/:id", LoaiSanPhamController.deleteLoaiSanPham);

route.patch("/:id", LoaiSanPhamController.updateLoaiSanPham);

route.get("/:id", LoaiSanPhamController.getLoaiSanPham);

route.post("/", LoaiSanPhamController.createLoaiSanPham);

route.get("/", LoaiSanPhamController.getLoaiSanPhams);

export default route;
