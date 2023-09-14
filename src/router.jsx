import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import SignUp from "./pages/SingUp"
import SingIn from "./pages/SingIn";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    { 
        path: '/',
        element: <MainLayout />,
        children: [ { path: "/", element: <Index /> },
                    { path: "/index", element: <Index /> },
                    { path: "/home", element: <Index /> },
                    { path: "/cities", element: <Cities /> },
                    { path: "/city/:id", element: <CityDetail />},
                    { path:'/profile', element: <Profile />},
                    { path: "/*", element: <NotFound />}
    ]
    },
    {
        path:'/signup',
        element: <SignUp />
    },
    {
        path:'/signin',
        element: <SingIn />
    }
]);

export default router;