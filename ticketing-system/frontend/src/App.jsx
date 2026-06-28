import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import CreateTicket from "./pages/CreateTicket.jsx";
import TicketDetail from "./pages/TicketDetail.jsx";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col p-6">
      <Navbar />
      <main className="flex-1">
      <Routes >
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tickets/new"
          element={
            <ProtectedRoute>
              <CreateTicket />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tickets/:id"
          element={
            <ProtectedRoute>
              <TicketDetail />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
        </main>
      <>
    
        <Routes>{/* your routes */}</Routes>

        <Footer />
      </>
    </div>
  );
}

export default App;
