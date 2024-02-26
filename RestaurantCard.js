

const RestaurantCard = (resData) => {
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName, locality } = resData?.resData.info;
   
  
  
    return (
      <div className="cards-container">
        <div className="card">
          <div className="card-media">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-card-img" />
            <div className="bookmark"></div>
          </div>
          <div className="card-description">
            <div className="about-place">
              <div className="place">
                <p className="place-name">{name}</p>
                <p className="place-speciality">{cuisines.join(", ")}</p>
              </div>
              <div className="place-review">
                <p className="rating">{avgRating}  &#x2605;</p>
                <p className="per-person">  {costForTwo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    )
  }
  
  export default RestaurantCard;
  
  
  // Higher Order Component
  
  // input - RestaurantCard =>> RestaurantCardPromoted
  
 
  
