import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [selectedRole, setSelectedRole] = useState(null);
  const roles = ["admin", "business", "customer"];

  const { login, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Select a role first");
      return;
    }

    const response = await login(selectedRole);

    if (response == true) {
      navigate(`/${selectedRole}`);
    }
  };

  return (
    <div className="min-h-screen relative bg-[#0b0f19] text-white overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute -top-37.5 -left-37.5 w-100 h-100 bg-purple-600 opacity-30 blur-3xl rounded-full" />
      <div className="absolute -bottom-37.5 -right-37.5 w-100 h-100 bg-cyan-500 opacity-30 blur-3xl rounded-full" />

      <div className="relative min-h-screen flex items-center justify-center p-6">

        {/* Glass Login Card */}
        <div className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8">

          <h1 className="text-3xl font-bold text-center mb-2">
            Role Dashboard
          </h1>

          <p className="text-gray-400 text-center mb-8">
            Select your access role
          </p>

          {/* Role Selection */}
          <div className="space-y-3 mb-8">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`w-full py-3 rounded-lg font-medium transition-all border ${
                  selectedRole === role
                    ? "bg-linear-to-r from-purple-600 to-cyan-500 border-transparent shadow-lg"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg font-semibold bg-white text-black hover:bg-gray-200 transition"
          >
            Continue
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;
