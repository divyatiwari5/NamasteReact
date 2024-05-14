import { useEffect, useState } from "react";
import { MEDIA_ASSET_LINK, RESTAURANT_DETAIL_API } from "../../utility/constants";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState(null);
  const fetchRestaurantDetails = async () => {
    const data = await fetch(RESTAURANT_DETAIL_API + `&restaurantId=${id}`);
    const jsonData = await data.json();
    const items = jsonData?.data?.cards.find((data) => data?.groupedCard);
    setMenuItem(items?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  };

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  return (
    <div className="restaurant-detail">
      <h2>Restaurant Name</h2>
      <div>
        <h3>Menu</h3>
        {!menuItem ? <Shimmer /> :
        (<div>
          {menuItem?.title}
          <div className="menu-card-container">
            {menuItem?.itemCards?.map((item) => {
              const { name, id, defaultPrice, imageId, price } =
                item?.card?.info;
              return (
                <div key={id} className="menu-card">
                  <div className="menu-card-title">
                    <h3>{name}</h3>
                    <h3>Rs. {(defaultPrice || price) / 100}</h3>
                  </div>
                  <div className="menu-card-image">
                    <img src={MEDIA_ASSET_LINK + imageId} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
