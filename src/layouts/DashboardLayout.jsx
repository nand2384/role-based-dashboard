import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function DashboardLayout({ title, children }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white/5 border-r border-white/10 p-6 hidden md:flex flex-col">

        {/* Logo / Title */}
        <h2 className="text-xl font-bold mb-8">Role Dashboard</h2>

        {/* Navigation */}
        <nav className="space-y-3 text-gray-300 flex-1">
          <p className="hover:text-white cursor-pointer">Overview</p>
          <p className="hover:text-white cursor-pointer">Analytics</p>
          <p className="hover:text-white cursor-pointer">Settings</p>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full py-3 rounded-lg font-semibold bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition"
        >
          Logout
        </button>

      </aside>

      {/* Main Content */}
      <div className="flex-1">

        {/* Header */}
        <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl px-8 py-5">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </header>

        {/* Page Content */}
        <main className="p-8">{children}</main>

      </div>
    </div>
  );
}

export default DashboardLayout;
