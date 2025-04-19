import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children,isAdmin}) {
    const {isAuthenticated,loading}= useSelector((state)=>state.authState)

    if (!isAuthenticated && !loading) {
        return < Navigate to={'/turbo/admin/login'} />
    }
        return children;                   
    };