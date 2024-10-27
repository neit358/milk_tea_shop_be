import { Router } from "express";
import SanPhamController from "../app/controller/sanPham.controller.js";

const route = Router();

route.get("/", SanPhamController.getSanPhams);

route.post("/filter", SanPhamController.filterSanPhams);

route.get("/:id", SanPhamController.getSanPham);

export default route;
