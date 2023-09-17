import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoute({ token, redirectPath }) {
    if (token){
        return <Navigate to={redirectPath} replace/>
    }
    return <Outlet />;
}
