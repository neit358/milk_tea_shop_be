import express from "express";
import upload, { uploadImage } from "../app/controller/upload.controller.js";

const router = express.Router();

router.post("/", upload.single("image"), uploadImage);

export default router;
