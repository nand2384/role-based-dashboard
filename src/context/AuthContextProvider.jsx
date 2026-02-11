import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
    const [role, setRole] = useState(() => {
      return localStorage.getItem("role");
    });

    useEffect(() => {
        const storedRole = localStorage.getItem("role");
        if (storedRole) {
            setRole(storedRole);
        }
    }, []);

    const login = (role) => {
        setRole(role);
        localStorage.setItem("role", role);
        return true;
    };

    const logout = () => {
        setRole(null);
        localStorage.removeItem("role");
        return true;
    };

    var isLoggedIn = !!role;

    return (
        <AuthContext.Provider value={{ role, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;