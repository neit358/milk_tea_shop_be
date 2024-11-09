import { Router } from "express";
import ToppingController from "../app/controller/topping.controller.js";

const route = Router();

route.get("/", ToppingController.getToppings);

export default route;
