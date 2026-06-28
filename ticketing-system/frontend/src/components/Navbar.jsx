import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");
  

  return (
    <div className="flex items-center justify-between bg-[#111623] shadow p-6 rounded-lg mb-6">
      <div className="flex gap-3">
      <div >
        <img className="rounded-full" src="https://thumbs.dreamstime.com/b/ap-initial-letter-company-logo-icon-ap-initial-letter-company-logo-148664775.jpg" alt="" width={60}/>
      </div>
      <div>
      <div className="font-bold text-3xl text-[#5b7fff]">SupportDesk</div>
      
      <div className="font-bold text-lg ml-4 text-[#454e6bd2]">AGENT PORTAL</div>
      </div>
      </div>
      

      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className={`px-4 py-2 rounded-lg w-26 h-12 ${
            !isAdmin ? "bg-red-600 text-white font-semibold" : "bg-gray-600"
          }`}
        >
          User
        </button>

        <button
          onClick={() => navigate("/admin")}
          className={`px-4 py-2 rounded-lg w-26 h-12 ${
            isAdmin ? "bg-red-600 text-white font-semibold" : "bg-gray-600"
          }`}
        >
          Admin
        </button>
      </div>

      <Link
        to="/tickets/new"
        className="bg-[#5b7fff] text-white px-4 py-3 w-36 h-12 rounded-lg"
      >
        + Create Ticket
      </Link>
    </div>
  );
}