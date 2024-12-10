import { Router } from "express";
import NguoiDungController from "../app/controller/nguoiDung.controller.js";

const route = Router();

route.patch("/change-password/:id", NguoiDungController.changePassword);

route.patch("/:id", NguoiDungController.updateNguoiDung);

route.get("/:id", NguoiDungController.getNguoiDung);

export default route;
