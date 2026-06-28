import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <footer className=" p-4  relative bottom-0 border-t flex justify-center">
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </footer>
  );
}