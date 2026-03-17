import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import designRoutes from "./routes/designRoute.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/designs", designRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});