import { Router } from "express";
import VaiTroController from "../app/controller/vaiTro.controller.js";

const route = Router();

route.get("/", VaiTroController.getVaiTros);

export default route;
