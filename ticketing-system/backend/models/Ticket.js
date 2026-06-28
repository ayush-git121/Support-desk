import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: String,
    status: String,

    messages: [
      {
        sender: String,
        text: String,
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model(
  "Ticket",
  ticketSchema
);

export default Ticket;