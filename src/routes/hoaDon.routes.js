import { Router } from "express";
import HoaDonController from "../app/controller/hoaDon.controller.js";

const route = Router();

route.post("/report", HoaDonController.reportHoaDons);

route.post("/filter", HoaDonController.filterHoaDons);

route.get("/all", HoaDonController.getHoaDons);

route.delete("/:id", HoaDonController.deleteHoaDon);

route.patch("/:id", HoaDonController.updateHoaDon);

route.post("/", HoaDonController.addHoaDon);

route.get("/:id", HoaDonController.getHoaDonById);

route.get("/", HoaDonController.getHoaDon);

export default route;
