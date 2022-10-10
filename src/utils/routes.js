import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Statics from "../components/Statics";
import Main from "../Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'statics',
                element: <Statics></Statics>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },

            {
                path: 'about',
                element: <About></About>
            },
        ]
    },

])

export default router