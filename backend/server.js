import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import { uploadsPath } from "./config/uploads.js";
import designRoutes from "./routes/designRoute.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.resolve(__dirname, "../frontend/dist");

connectDB();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.use("/uploads", express.static(uploadsPath));

app.use("/api/designs", designRoutes);

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use(express.static(frontendDistPath));

app.get(/^(?!\/api|\/uploads).*/, (req, res) => {
  res.sendFile(path.join(frontendDistPath, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
