import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import GalleryDetail from "./pages/GalleryDetail";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Category from "./pages/CategoryPages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/gallery',
        element: <GalleryDetail />,
    },
    {
        path: '/admin',
        element: <Admin />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/wedding',
        element: <Category />,
    },
    {
        path: '/graduation',
        element: <Category />,
    },
    {
        path: '/videography',
        element: <Category />,
    },
    {
        path: '/street',
        element: <Category />,
    },
    { 
        path: '*', 
        element: <Error />
    }
])