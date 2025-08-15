import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import testRoutes from "./routes/testRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// ✅ Allow all devices on LAN
app.use(cors({ origin: "*" }));

// ✅ Routes
app.use("/api/test", testRoutes);

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

// ✅ Listen on all interfaces for LAN access
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});
