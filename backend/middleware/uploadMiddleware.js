import multer from "multer";
import path from "path";
import { randomUUID } from "crypto";

import { uploadsPath } from "../config/uploads.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath);
  },

  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, `${Date.now()}-${randomUUID()}${extension}`);
  },
});

const upload = multer({ storage });

export default upload;
