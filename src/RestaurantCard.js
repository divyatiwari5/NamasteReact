const RestaurantCard = (props) => {
    const restaurantInfo = props?.restaurant?.info;
    return (
        <div className="restaurant">
            <div className="head">
                <img
                    className="banner"
                    src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+restaurantInfo?.cloudinaryImageId}></img>
                <h3 className="offer">{restaurantInfo?.aggregatedDiscountInfoV3?.header} {restaurantInfo?.aggregatedDiscountInfoV3?.subHeader}</h3>
            </div>
            <div className="content">
                <div className="title">{restaurantInfo?.name}</div>
                <div className="info">
                    <img height={20} width={20} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2fO06E83wILT6e9SNlK8MUEtKGAAmj8kzQ&s"></img>
                    <h4>{restaurantInfo?.avgRating} • </h4>
                    <h4>{restaurantInfo?.sla?.slaString}</h4>
                </div>
                <div>{restaurantInfo?.cuisines.join(", ")}</div>
                <div>{restaurantInfo?.areaName}</div>
            </div>
        </div>
    )
}

export default RestaurantCard;