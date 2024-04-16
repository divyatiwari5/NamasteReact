import React from "react";
import { createRoot } from "react-dom/client";

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

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                 className="logo"
                 src="https://img.freepik.com/premium-vector/click-food-logo-design-template_145155-4164.jpg?size=626&ext=jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">

            </div>
            <div className="restaurant-container">
                
            </div>
        </div>
    )
}
 

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
        </div>
    )
}

root.render(<AppLayout />)