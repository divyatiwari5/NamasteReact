import Search from "../Search/Search";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useGetRestaurant from "../../utility/useGetRestaurant";
import { UserContext } from "../../utility/userContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const restaurants = useGetRestaurant();
  const {setUserInfo } = useContext(UserContext);
  useEffect(() => {
    setFilteredRestaurant(restaurants);
    setListOfRestaurant(restaurants);
  }, [restaurants]);

  useEffect(() => {
    if (listOfRestaurant?.length > 0) {
      setPageLoading(false);
    }
  }, [listOfRestaurant]);

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
            <input onChange={(e) => setUserInfo(e.target.value)}/>
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
