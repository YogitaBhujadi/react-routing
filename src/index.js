import ReactDom from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Home from './views/Home/Home';
import Dashboard from './views/Dashboard/Dashboard';
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/About",
        element: <About/>
    },
    {
        path: "/Contact",
        element: <Contact/>
    },
    {
        path: "/Dashboard",
        element: <Dashboard/>
    }
])


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>)





