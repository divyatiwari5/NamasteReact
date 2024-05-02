import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.633868&lng=77.20531319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const restaurant = jsonData?.data?.cards?.find((card) => {
      return card?.card?.card?.id === "restaurant_grid_listing";
    });
    const restaurantList =
      restaurant?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(restaurantList);
    setFilteredRestaurant(restaurantList);
    setPageLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSearchClick = (searchValue) => {
    const filteredResult = listOfRestaurant.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredRestaurant(filteredResult);
  };

  return (
    <div className="body">
      {pageLoading ? (
        <Shimmer />
      ) : (
        <>
          <div className="search-container">
            <Search
              searchText={searchText}
              onSearchTextChange={setSearchText}
              onSearchClick={onSearchClick}
            />
          </div>
          <div className="restaurant-container">
            {filteredRestaurant.length === 0 ? (
              <div>No results found!!</div>
            ) : (
              <>
                {filteredRestaurant.map((restaurant) => {
                  return (
                    <Link
                      to={'/restaurant/'+ restaurant?.info?.id}
                      key={restaurant?.info?.id}
                      className="link"
                    >
                      <RestaurantCard
                        restaurant={restaurant}
                      />
                    </Link>
                    
                  );
                })}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
