import { Router } from "express";
import nguoiDungController from "../app/controller/nguoiDung.controller.js";

const route = Router();

route.get("/logout", nguoiDungController.logout);

route.post("/login", nguoiDungController.login);

route.post("/register", nguoiDungController.register);

export default route;
