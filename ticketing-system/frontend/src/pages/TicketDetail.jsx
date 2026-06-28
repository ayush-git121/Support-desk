import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/ticketApi";

export default function TicketDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
  const getTicket = async () => {
    try {
      const response = await api.get(`/tickets/${id}`);

      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      setTicket(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  getTicket();
}, [id]);
  

  if (loading) {
  return (
    <div className="flex justify-center items-center h-64">
      <h1 className="text-2xl">Loading...</h1>
    </div>
  );
}

if (!ticket) {
  return (
    <div className="flex justify-center items-center h-64">
      <h1 className="text-2xl text-red-500">
        Ticket Not Found
      </h1>
    </div>
  );
}
  const handleSend = async (e) => {
  e.preventDefault();

  if (!messageText.trim()) {
    alert("Message is empty");
    return;
  }

  try {
    const response = await api.post(
      `/tickets/${id}/messages`,
      {
        text: messageText,
      }
    );
  

    setTicket(response.data);

    setMessageText("");
  } catch (error) {
    console.error(error);
  }
};


  const handleResolve = async () => {
    try {
      const response = await api.patch(`/tickets/${id}`, {
        status: "Resolved",
      });

      setTicket(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    const ok = window.confirm("Delete this ticket?");

    if (!ok) return;

    try {
      await api.delete(`/tickets/${id}`);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-black shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          Ticket Information
        </h2>

        <p>
          <strong>ID:</strong> {ticket._id}
        </p>

        <p>
          <strong>Title:</strong> {ticket.title}
        </p>

        <p>
          <strong>Category:</strong> {ticket.category}
        </p>

        <p>
          <strong>Priority:</strong> {ticket.priority}
        </p>

        <p>
          <strong>Status:</strong> {ticket.status}
        </p>

        <div className="mt-4">
          <strong>Description:</strong>
          <p>{ticket.description}</p>
        </div>

        <div className="mt-6 flex gap-8">
          <button
            onClick={handleResolve}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Mark as Resolved
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Delete Ticket
          </button>
        </div>
      </div>

      <div className="bg-black shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          Messages
        </h2>

        <div className="max-h-80 overflow-y-auto mb-4">
          {!ticket.messages ||
          ticket.messages.length === 0 ? (
            <p>No messages yet</p>
          ) : (
            ticket.messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 rounded-lg text-black mb-3 max-w-[80%] ${
                  message.sender === "user"
                    ? "bg-blue-100 ml-auto"
                    : "bg-gray-100 mr-auto"
                }`}
              >
                <p className="text-lg font-bold">
                  {message.sender === "user"
                    ? "User"
                    : "Support Agent"}
                </p>

                <p>{message.text}</p>
              </div>
            ))
          )}
        </div>

        <form
          onSubmit={handleSend}
          className="flex gap-2"
        >
          <input
            type="text"
            value={messageText}
            onChange={(e) =>
              setMessageText(e.target.value)
            }
            className="flex-1 border rounded-lg px-3 py-2"
            placeholder="Type your message..."
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}