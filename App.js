import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/About";
import Error from "./src/Error";
import Contact from "./src/Contact";
import RestaurantDetail from "./src/RestaurantDetail";

const root = createRoot(document.getElementById("root"));

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetail />
            }
        ],
        errorElement: <Error />,
    },
    
])

root.render(<RouterProvider router={appRouter} />)