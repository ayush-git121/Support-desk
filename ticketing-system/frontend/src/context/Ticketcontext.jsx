import { createContext, useContext, useEffect, useState } from "react";
import seedTickets from "../utils/seedData";
import { loadTickets, saveTickets } from "../utils/storage";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    let storedTickets = loadTickets();

    if (storedTickets.length === 0) {
      saveTickets(seedTickets);
      storedTickets = seedTickets;
    }

    setTickets(storedTickets);
  }, []);

  useEffect(() => {
    if (tickets.length > 0) {
      saveTickets(tickets);
    }
  }, [tickets]);

  const addTicket = (ticket) => {
    setTickets((prev) => [...prev, ticket]);
  };

  const updateTicket = (updatedTicket) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === updatedTicket.id ? updatedTicket : ticket
      )
    );
  };

  const deleteTicket = (id) => {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
  };

  const addMessage = (ticketId, message) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, messages: [...ticket.messages, message] }
          : ticket
      )
    );
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        addTicket,
        updateTicket,
        deleteTicket,
        addMessage,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => useContext(TicketContext);