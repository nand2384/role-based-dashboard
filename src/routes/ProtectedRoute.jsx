import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { Navigate } from "react-router-dom";


function ProtectedRoute({ children, allowedRoles }) {
    const { role, isLoggedIn } = useContext(AuthContext);

    if(!isLoggedIn) {
        return <Navigate to='/login' />
    }

    if(!allowedRoles.includes(role)) {
        return <Navigate to='/unauthorized' />
    }

    return children;
};

export default ProtectedRoute
