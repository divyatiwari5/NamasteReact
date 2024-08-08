import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About/About";
import Error from "./src/components/Error/Error";
import Contact from "./src/components/Contact/Contact";
import Shimmer from "./src/components/Shimmer/Shimmer";
import { AppContext, UserContext } from "./src/utility/userContext";

const RestaurantDetail = lazy(() =>
  import("./src/components/RestaurantDetail/RestaurantDetail")
);

const root = createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "Divya Tiwari",
    };
    setUserInfo(data.name);
  }, []);

  return (
    // Divya Tiwari
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <AppContext.Provider value={{ appName: "Hey, Namaste!!" }}>
        <div className="app">
          {/* hahhaha */}
          <Header />
          <Outlet />
        </div>
      </AppContext.Provider>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantDetail />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
