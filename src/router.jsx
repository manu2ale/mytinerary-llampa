import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Index from "./pages/Index";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import SignUp from "./pages/SingUp"
import SingIn from "./pages/SingIn";
import Profile from "./pages/Profile";
import ViewProfile from "./components/ViewProfile";
import EditProfile from "./components/EditProfile";
import ChangePassword from "./components/ChangePassword";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteProfile from "./components/ProtectedRouteProfile";

const token = localStorage.getItem('token');

const router = createBrowserRouter([
    { 
        path: '/',
        element: <MainLayout />,
        children: [ { path: "/", element: <Index /> },
                    { path: "/index", element: <Index /> },
                    { path: "/home", element: <Index /> },
                    { path: "/cities", element: <Cities /> },
                    { path: "/city/:id", element: <CityDetail />},
                    { path:'/', element: <ProtectedRouteProfile token={token} redirectPath={'/'} />,
                      children: [{ path:'/profile', element: <Profile />, 
                                    children: [{ path:'/profile', element: <ViewProfile />},
                                    { path:'/profile/edit', element: <EditProfile />},           
                                    { path:'/profile/passchange', element: <ChangePassword />}]}]
                    },
                    { path: "/*", element: <NotFound />}
                  ]
    },
    {
        path:'/',
        element: <ProtectedRoute token={token} redirectPath={'/'}/>,
        children: [{ path:'/signup', element:<SignUp />},
                   { path:'/signin', element:<SingIn />}
                  ]
    }
    // {
    //     path:'/signin',
    //     element: <SingIn />
    // }
]);

export default router;