import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTickets } from "../context/TicketContext";
import api from "../api/ticketApi";

export default function CreateTicket() {
  const navigate = useNavigate();
  const { addTicket, updateTicket } = useTickets();

  const [formData, setFormData] = useState({
    title: "",
    category: "Hardware",
    priority: "Low",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.title.trim().length < 5) {
      alert("Title must be at least 5 characters");
      return;
    }

    if (formData.description.trim().length < 20) {
      alert("Description must be at least 20 characters");
      return;
    }

    const response = await api.post("/tickets", {
      title: formData.title,
      description: formData.description,
      category: formData.category,
      priority: formData.priority,
      status: "Open",
    });

    console.log(response.data);

    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto bg-black p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold content-center mb-2">
        Submit a New Ticket
      </h1>
      <p className="text-gray-600 mb-6">Fill in the details of your issue.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-[#0b0f1a] border  rounded-lg px-3 py-2"
          >
            <option>Hardware</option>
            <option>Software</option>
            <option>Billing</option>
            <option>Network</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full bg-[#0b0f1a] border rounded-lg px-3 py-2"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-400 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
