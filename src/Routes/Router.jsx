import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Products from "../Pages/Products/Products";
import Outlets from "../Pages/Outlets/Outlets";
import ContactUs from "../Pages/Contact us/ContactUs";
import Error from "../Pages/Error/Error";
import Authentication from "../Pages/Authentication/Authentication";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import UserDashBoard from "../Layout/UserDashBoard";
import Cart from "../Pages/User Pages/Cart/Cart";
import Orders from "../Pages/User Pages/Orders/Orders";
import Liked from "../Pages/User Pages/Liked/Liked";
import Profile from "../Pages/User Pages/Profile/Profile";
import Product from "../Pages/Products/Product/Product";
import UserRoute from "./UserRoute";

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
                path: '/products/:id',
                element: <Product />
            },
            {
                path: '/outlets',
                element: <Outlets />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/user',
                element: <UserRoute />,
                children: [
                    {
                        path: '/user/',
                        element: <Cart />
                    },
                    {
                        path: '/user/cart',
                        element: <Cart />
                    },
                    {
                        path: '/user/orders',
                        element: <Orders />
                    },
                    {
                        path: '/user/liked',
                        element: <Liked />
                    },
                    {
                        path: '/user/profile',
                        element: <Profile />
                    },
                ]
            },
        ]
    },
    {
        path: '/auth',
        element: <Authentication />,
        errorElement: <Error />,
        children: [
           {
            path: '',
            element: <SignIn />
           }, 
           {
            path: 'sign-up',
            element: <SignUp />
           }, 
        ]
    }
])