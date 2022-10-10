import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Home from "../components/Home";
import Statics from "../components/Statics";
import Main from "../Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'statics',
                element: <Statics></Statics>
            },
            {
                path: '/',
                element: <Blog></Blog>
            },
        ]
    },

])

export default router