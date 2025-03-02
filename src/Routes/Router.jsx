import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Products from "../Pages/Products/Products";
import Outlets from "../Pages/Outlets/Outlets";
import ContactUs from "../Pages/Contact us/ContactUs";
import Error from "../Pages/Error/Error";

export const router = createBrowserRouter([
    {
    path:'/',
    element: <Main />,
    errorElement:<Error />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/products',
            element: <Products />
        },
        {
            path: '/outlets',
            element: <Outlets />
        },
        {
            path: '/contact-us',
            element: <ContactUs />
        },
    ]
    },
])