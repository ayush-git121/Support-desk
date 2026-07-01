# 🎫 SupportDesk - MERN Ticket Management System

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?logo=jsonwebtokens)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-blue)

</p>

## 🌐 Live Demo

🔗 **Website:** https://your-vercel-link.vercel.app

---

# 📖 Overview

SupportDesk is a full-stack Ticket Management System built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It enables users to create, manage, and track support tickets while providing an Admin Dashboard to monitor ticket statistics and manage tickets efficiently.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Logout

## 🎫 Ticket Management

- Create Tickets
- View Ticket Details
- Search Tickets
- Update Ticket Status
- Update Ticket Priority
- Update Ticket Category
- Delete Tickets
- Ticket Messaging

## 📊 Dashboard

- User Dashboard
- Admin Dashboard
- Ticket Analytics
- Ticket Status Charts
- Ticket Priority Charts

---

# 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Recharts

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- dotenv

---

# 📂 Project Structure

```text
SupportDesk
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/ayush-git121/Support-desk.git

cd Support-desk
```

---

## 2. Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=8000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

---

# ☁️ Deployment Guide

## Backend (Render)

1. Push your project to GitHub.

2. Create a **Web Service** on Render.

3. Select your GitHub repository.

4. Set the **Root Directory** to:

```text
backend
```

5. Build Command

```bash
npm install
```

6. Start Command

```bash
npm start
```

7. Add Environment Variables

```text
MONGO_URI
JWT_SECRET
```

8. Deploy your backend.

---

## Database (MongoDB Atlas)

1. Create a Free Cluster.

2. Create a Database User.

3. Allow Network Access.

```text
0.0.0.0/0
```

4. Copy the MongoDB Connection String.

5. Add it to Render as **MONGO_URI**.

---

## Frontend (Vercel)

1. Import your GitHub Repository.

2. Set the Root Directory to:

```text
frontend
```

3. Framework Preset:

```text
Vite
```

4. Deploy.

5. Update the frontend API URL to your deployed Render backend.

---

# 👨‍💻 Author

**Ayush**

GitHub: https://github.com/ayush-git121