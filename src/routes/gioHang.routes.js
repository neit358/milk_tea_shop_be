import { Router } from "express";
import GioHangController from "../app/controller/gioHang.controller.js";

const route = Router();

route.patch("/", GioHangController.deleteGioHang);

route.post("/", GioHangController.addGioHang);

route.get("/:id", GioHangController.getGioHangs);

export default route;
