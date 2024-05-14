import Search from "../Search/Search";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API } from "../../utility/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
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
                      to={"/restaurant/" + restaurant?.info?.id}
                      key={restaurant?.info?.id}
                      className="link"
                    >
                      <RestaurantCard restaurant={restaurant} />
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
