import { Router } from "express";
import TraController from "../app/controller/tra.controller.js";

const route = Router();

route.get("/", TraController.getTras);

export default route;
