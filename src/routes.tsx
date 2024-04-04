import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CategoryItemPages from "./pages/CategoryItemPages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/gallery',
        element: <Gallery />,
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
        path: 'gallery/wedding',
        element: <CategoryItemPages />,
    },
    {
        path: 'gallery/graduation',
        element: <CategoryItemPages />,
    },
    {
        path: 'gallery/videography',
        element: <CategoryItemPages />,
    },
    {
        path: 'gallery/street',
        element: <CategoryItemPages />,
    },
    {
        path: 'gallery/all',
        element: <CategoryItemPages />,
    },
    { 
        path: '*', 
        element: <Error />
    }
])