import { useState, useEffect } from "react";
import api from "../api/ticketApi";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await api.get("/tickets");
        setTickets(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getTickets();
  }, []);

  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open",
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress",
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === "Resolved",
  ).length;

  const handleStatusChange = async (ticket, newStatus) => {
    try {
      const response = await api.patch(`/tickets/${ticket._id}`, {
        status: newStatus,
      });

      setTickets((prev) =>
        prev.map((t) => (t._id === ticket._id ? response.data : t)),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handlePriorityChange = async (ticket, newPriority) => {
    try {
      const response = await api.patch(`/tickets/${ticket._id}`, {
        priority: newPriority,
      });

      setTickets((prev) =>
        prev.map((t) => (t._id === ticket._id ? response.data : t)),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = async (ticket, newCategory) => {
    try {
      const response = await api.patch(`/tickets/${ticket._id}`, {
        category: newCategory,
      });

      setTickets((prev) =>
        prev.map((t) => (t._id === ticket._id ? response.data : t)),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tickets/${id}`);

      setTickets((prev) => prev.filter((ticket) => ticket._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const statusData = [
    { name: "Open", value: openTickets },
    { name: "In Progress", value: inProgressTickets },
    { name: "Resolved", value: resolvedTickets },
  ];

  const priorityData = [
    {
      name: "Low",
      value: tickets.filter((t) => t.priority === "Low").length,
    },
    {
      name: "Medium",
      value: tickets.filter((t) => t.priority === "Medium").length,
    },
    {
      name: "High",
      value: tickets.filter((t) => t.priority === "High").length,
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid  md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="invert text-xl">Total Tickets</h3>
          <p className="text-3xl invert font-bold">{totalTickets}</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="invert text-xl">Open</h3>
          <p className="text-3xl invert font-bold">{openTickets}</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="invert text-xl">In Progress</h3>
          <p className="text-3xl invert font-bold">{inProgressTickets}</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="invert text-xl">Resolved</h3>
          <p className="text-3xl invert font-bold">{resolvedTickets}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">All Tickets</h2>

        <div className="space-y-3">
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#454e6bd2] p-4 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">
                Ticket Status Distribution
              </h2>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    dataKey="value"
                    outerRadius={110}
                    label
                  >
                    <Cell fill="#3b82f6" />
                    <Cell fill="#f59e0b" />
                    <Cell fill="#10b981" />
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-[#454e6bd2] p-4 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Priority Distribution</h2>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={priorityData}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Bar dataKey="value" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {tickets.map((ticket) => (
            <div key={ticket._id} className="border rounded-lg p-4 shadow">
              <h3 className="font-semibold">{ticket.title}</h3>

              <div className="mt-2">
                <label className="font-semibold">Status:</label>

                <select
                  value={ticket.status}
                  onChange={(e) => handleStatusChange(ticket, e.target.value)}
                  className="border ml-2 px-2 py-1 text-gray-400  rounded hover:cursor-pointer"
                >
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>

              <div className="mt-2">
                <label className="font-semibold">Priority:</label>

                <select
                  value={ticket.priority}
                  onChange={(e) => handlePriorityChange(ticket, e.target.value)}
                  className="border ml-2 px-2 py-1 text-gray-400 rounded hover:cursor-pointer"
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>

              <div className="mt-2">
                <label className="font-semibold">Category:</label>

                <select
                  value={ticket.category}
                  onChange={(e) => handleCategoryChange(ticket, e.target.value)}
                  className="border ml-2 px-2 py-1 text-gray-400 rounded hover:cursor-pointer"
                >
                  <option>Hardware</option>
                  <option>Software</option>
                  <option>Billing</option>
                  <option>Network</option>
                  <option>Other</option>
                </select>
              </div>
              <button
                onClick={() => handleDelete(ticket._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:cursor-pointer hover:bg-red-400"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
