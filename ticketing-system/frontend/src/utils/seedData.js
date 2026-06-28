const seedTickets = [
  {
    id: "TKT-001",
    title: "Laptop screen flickering",
    category: "Hardware",
    priority: "High",
    description: "The screen flickers every few seconds.",
    status: "Open",
    createdAt: "2026-05-25T10:00:00Z",
    resolvedAt: null,
    messages: [
      {
        id: "msg1",
        sender: "user",
        text: "My laptop screen is flickering.",
        timestamp: "2026-05-25T10:05:00Z",
      },
    ],
  },
  {
    id: "TKT-002",
    title: "Software installation issue",
    category: "Software",
    priority: "Medium",
    description: "Unable to install required software.",
    status: "In Progress",
    createdAt: "2026-05-26T12:00:00Z",
    resolvedAt: null,
    messages: [],
  },
  {
    id: "TKT-003",
    title: "Internet not working",
    category: "Network",
    priority: "High",
    description: "WiFi disconnects frequently.",
    status: "Resolved",
    createdAt: "2026-05-27T09:00:00Z",
    resolvedAt: "2026-05-28T09:00:00Z",
    messages: [],
  },
];

export default seedTickets;