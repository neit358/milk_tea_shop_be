import { Router } from "express";
import ChiNhanhController from "../app/controller/chiNhanh.controller.js";

const route = Router();

route.get("/", ChiNhanhController.getChiNhanhs);

export default route;
