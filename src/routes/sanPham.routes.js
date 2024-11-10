import { Router } from "express";
import SanPhamController from "../app/controller/sanPham.controller.js";

const route = Router();

route.post("/filter", SanPhamController.filterSanPhams);

route.delete("/:id", SanPhamController.deleteSanPham);

route.patch("/:id", SanPhamController.updateSanPham);

route.get("/:id", SanPhamController.getSanPham);

route.post("/", SanPhamController.createSanPham);

route.get("/", SanPhamController.getSanPhams);

export default route;
