import { Router } from "express";
import KichThuocController from "../app/controller/kichThuoc.controller.js";

const route = Router();

route.get("/", KichThuocController.getKichThuocs);

export default route;
