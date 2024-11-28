import { Router } from "express";
import GioHangController from "../app/controller/gioHang.controller.js";

const route = Router();

route.patch("/update/:id", GioHangController.updateGioHang);

route.get("/:id", GioHangController.getGioHangs);

route.patch("/:id", GioHangController.deleteGioHang);

route.post("/", GioHangController.addGioHang);

export default route;
