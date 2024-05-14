import { MEDIA_ASSET_LINK } from "../../utility/constants";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import useGetRestaurantDetails from "../../utility/useGetRestaurantDetails";

const RestaurantDetail = () => {
  const { id } = useParams();
  const menuItem = useGetRestaurantDetails(id);

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
