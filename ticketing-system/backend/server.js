import express from "express";
import mongoose from "mongoose";
import ticketRoutes from "./routes/ticketRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import { protect } from "./middleware/authMiddleware.js";
import { adminOnly } from "./middleware/adminMiddleware.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected Route",
    user: req.user,
  });
});
app.get("/admin", protect, adminOnly, (req, res) => {
  res.json({
    message: "Welcome Admin",
  });
});
app.use("/tickets", ticketRoutes);
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
