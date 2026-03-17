import express from "express";
import {
  addDesign,
  getDesigns,
  deleteDesign,
  updateStock,
} from "../controller/designController.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/", upload.single("image"), addDesign);

router.get("/", getDesigns);

router.delete("/:id", deleteDesign);

router.put("/:id", updateStock);

export default router;