import { Router } from "express";
import DaController from "../app/controller/da.controller.js";

const route = Router();

route.get("/", DaController.getDas);

export default route;
