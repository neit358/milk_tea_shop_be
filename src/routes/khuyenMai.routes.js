import { Router } from "express";
import khuyenMaiController from "../app/controller/khuyenMai.controller.js";

const route = Router();

route.patch("/:id/apply-promotion", khuyenMaiController.applyPromotions);

route.patch("/:id", khuyenMaiController.updateKhuyenMai);

route.delete("/:id", khuyenMaiController.deleteKhuyenMai);

route.get("/:id", khuyenMaiController.getKhuyenMai);

route.post("/", khuyenMaiController.createKhuyenMai);

route.get("/", khuyenMaiController.getKhuyenMais);

export default route;
