import { useEffect, useState } from "react";
import { RESTAURANT_DETAIL_API } from "./constants";

const useGetRestaurantDetails = (id) => {
    console.log(id);
    const [menuItem, setMenuItem] = useState([]);

    useEffect(() => {
        fetchRestaurantDetails();
    }, [id]);

    const fetchRestaurantDetails = async () => {
        const data = await fetch(RESTAURANT_DETAIL_API + `&restaurantId=${id}`);
        const jsonData = await data.json();
        const items = jsonData?.data?.cards.find((data) => data?.groupedCard);
        setMenuItem(items?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
      };

    return menuItem;
}

export default useGetRestaurantDetails;