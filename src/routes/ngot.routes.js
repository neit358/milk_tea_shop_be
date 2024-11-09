import { Router } from "express";
import NgotController from "../app/controller/ngot.controller.js";

const route = Router();

route.get("/", NgotController.getNgots);

export default route;
