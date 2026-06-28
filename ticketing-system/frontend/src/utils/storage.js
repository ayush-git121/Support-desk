export const loadTickets = () => {
  const data = localStorage.getItem("support_tickets");
  return data ? JSON.parse(data) : [];
};

export const saveTickets = (tickets) => {
  localStorage.setItem("support_tickets", JSON.stringify(tickets));
};