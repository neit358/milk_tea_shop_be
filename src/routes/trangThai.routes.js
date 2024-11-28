import { Router } from "express";
import TrangThaiController from "../app/controller/trangThai.controller.js";

const route = Router();

route.get("/", TrangThaiController.getTrangThais);

export default route;
