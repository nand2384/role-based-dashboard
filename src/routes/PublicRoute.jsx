import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function PublicRoute({ children }) {
  const { role, isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to={`/${role}`} replace />;
  }

  return children;
}

export default PublicRoute;