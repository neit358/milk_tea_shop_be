import { Router } from "express";
import XacThucController from "../app/controller/xacThuc.controller.js";

const route = Router();

route.get("/checkAuth", XacThucController.checkAuth);

route.get("/logout", XacThucController.logout);

route.post("/login", XacThucController.login);

route.post("/register", XacThucController.register);

export default route;
