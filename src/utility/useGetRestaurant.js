import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const useGetRestaurant = () => {
  
   const [restaurants, setRestaurants] = useState([]); 
    
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const jsonData = await data.json();
    const restaurant = jsonData?.data?.cards?.find((card) => {
      return card?.card?.card?.id === "restaurant_grid_listing";
    });
    const restaurantList =
      restaurant?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurants(restaurantList);
  };

  return restaurants;
};

export default useGetRestaurant;
