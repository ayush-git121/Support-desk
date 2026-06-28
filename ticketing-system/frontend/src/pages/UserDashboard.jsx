import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import api from "../api/ticketApi";

export default function UserDashboard() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");

  const filteredTickets = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
  const getTickets = async () => {
    const response = await api.get("/tickets");

   setTickets(response.data);
  };

  getTickets();
}, []);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>

      <input
        type="text"
        placeholder="Search tickets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-3 py-2 mb-4 w-full"
      />

      {filteredTickets.map((ticket) => (
          <NavLink key={ticket._id} to={`/tickets/${ticket._id}`}>
          <div className="border p-4 rounded-lg mb-3 shadow">
            <h2 className="font-semibold mb-2 text-lg">{ticket.title}</h2>
            <div className="flex mb-2">

            <div>Status: </div>
            <span
              className={`px-2 py-0.8 mr-3 rounded text-sm font-medium ${
                ticket.status === "Resolved"
                  ? "bg-green-100 text-green-700"
                  : ticket.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
              }`}
            >
              {ticket.status}      
            </span>
            </div>
            <div className="flex">
              <div>Priority: </div>
            
            <span
              className={`px-2 py-0.8 rounded text-sm font-medium ${
                ticket.priority === "High"
                  ? "bg-red-100 text-red-700"
                  : ticket.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
              }`}
            >
              {ticket.priority}
            </span>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
