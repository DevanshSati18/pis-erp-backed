import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

// Connect to DB
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ERP Backend is running 🚀");
});

// Example test route for data
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from ERP Backend" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
