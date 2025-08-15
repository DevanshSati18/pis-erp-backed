import express from "express";

const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json({ message: "Hello from ERP Backend" });
});

export default router;
