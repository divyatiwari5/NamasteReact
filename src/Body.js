import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.633868&lng=77.20531319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        const restaurant = jsonData?.data?.cards?.find((card) => {
            return card?.card?.card?.id === "restaurant_grid_listing"});
        const restaurantList = restaurant?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurantList)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="body">
            <div className="search-container">
                <Search />
            </div>
            <div className="restaurant-container">
            {listOfRestaurant.map((restaurant) => {
                return (
                    <RestaurantCard restaurant={restaurant} key={restaurant?.info?.id}/>
                )
                })}
            </div>
        </div>
    )
}
 
export default Body;