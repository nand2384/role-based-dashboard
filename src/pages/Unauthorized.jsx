import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Unauthorized() {
  const navigate = useNavigate();
  const { role } = useContext(AuthContext);

  const handleRedirect = () => {
    if (role) {
      navigate(`/${role}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen relative bg-[#0b0f19] text-white overflow-hidden flex items-center justify-center">

      {/* Background glow */}
      <div className="absolute -top-30 -left-30 w-87.5 h-87.5 bg-red-600 opacity-25 blur-3xl rounded-full" />
      <div className="absolute -bottom-30 -right-30 w-87.5 h-87.5 bg-purple-600 opacity-25 blur-3xl rounded-full" />

      {/* Glass card */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">

        <h1 className="text-5xl font-bold mb-4 text-red-400">
          403
        </h1>

        <h2 className="text-2xl font-semibold mb-3">
          Access Denied
        </h2>

        <p className="text-gray-400 mb-8">
          You don’t have permission to access this page.
        </p>

        <button
          onClick={handleRedirect}
          className="w-full py-3 rounded-lg font-semibold bg-white text-black hover:bg-gray-200 transition"
        >
          Go to Dashboard
        </button>

      </div>
    </div>
  );
}

export default Unauthorized;
