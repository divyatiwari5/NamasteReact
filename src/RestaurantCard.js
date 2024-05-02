const RestaurantCard = (props) => {
  const restaurantInfo = props?.restaurant?.info;
  console.log({ restaurantInfo });
  return (
    <div className="restaurant">
      <div className="head">
        <img
          className="banner"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_960/" +
            restaurantInfo?.cloudinaryImageId
          }
        ></img>
        <h3 className="offer">
          {restaurantInfo?.aggregatedDiscountInfoV3?.header}{" "}
          {restaurantInfo?.aggregatedDiscountInfoV3?.subHeader}
        </h3>
      </div>
      <div className="content">
        <div className="title">
          <h4>{restaurantInfo?.name}</h4>
          <span className="rating">
            <h4>{restaurantInfo?.avgRating}</h4>
            <img
              height={20}
              width={20}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2fO06E83wILT6e9SNlK8MUEtKGAAmj8kzQ&s"
            ></img>
          </span>
        </div>
        <div className="desc">
          <p className="cuisine">{restaurantInfo?.cuisines.join(", ")}</p>
          <p>{restaurantInfo?.costForTwo}</p>
        </div>
        <div className="desc">
          <p>{restaurantInfo?.areaName}</p>
          <p>{restaurantInfo?.sla?.slaString}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
