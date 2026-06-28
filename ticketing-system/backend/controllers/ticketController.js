import Ticket from "../models/Ticket.js";

export const getTickets = async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
};

export const getTicketById = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    return res.status(404).json({
      message: "Ticket not found",
    });
  }

  res.json(ticket);
};

export const createTicket = async (req, res) => {
  const ticket = await Ticket.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    priority: req.body.priority,
    status: "Open",
  });

  res.json(ticket);
};

export const updateTicket = async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(ticket);
};

export const deleteTicket = async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
  });
};
export const addMessage = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    return res.status(404).json({
      message: "Ticket not found",
    });
  }

  ticket.messages.push({
    sender: "user",
    text: req.body.text,
  });

  await ticket.save();

  res.json(ticket);
};