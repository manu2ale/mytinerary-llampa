import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import Cities from "./pages/Cities";


const router = createBrowserRouter([
    { 
        path: '/',
        element: <MainLayout />,
        children: [ { path: "/", element: <Index /> },
                    { path: "/index", element: <Index /> },
                    { path: "/home", element: <Index /> },
                    { path: "/cities", element: <Cities /> }
    ]
    },
]);

export default router;