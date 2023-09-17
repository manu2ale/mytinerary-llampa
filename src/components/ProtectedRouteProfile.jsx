import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRouteProfile({ token, redirectPath }) {
    if (!token){
        return <Navigate to={redirectPath}/>
    }
    return <Outlet />;
}
