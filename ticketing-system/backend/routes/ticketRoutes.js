import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import {
  getTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
  addMessage,
} from "../controllers/ticketController.js";

const router = express.Router();

router.get("/", protect, getTickets);

router.get("/:id", protect, getTicketById);

router.post("/", protect, createTicket);

router.patch("/:id", protect, updateTicket);

router.delete("/:id", protect, deleteTicket);

router.post("/:id/messages", protect, addMessage);

export default router;
