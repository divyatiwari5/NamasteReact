import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";

const root = createRoot(document.getElementById("root"));

/***
 * Header
 *  - logo 
 *  - nav items (home, about, cart), 
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *  - Link item
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

root.render(<AppLayout />)