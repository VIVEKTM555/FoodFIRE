import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Shimmer from './Shimmer';
import ShimmerMenu from './ShimmerMenu';
import { IMG_URL } from './config';



const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=' + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <header className="menu-header">
        <div className="menu-header-left">
          <img src={IMG_URL + cloudinaryImageId} alt="Restaurent Info" />
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
          </div>
          <div className="bottom">
            <h4 className="avg-rating">
              <span
                className="icons"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              >
                
              </span>
              <span>{avgRating}</span>
            </h4>
            <h4 className="time">
              <span
                className="icons"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              >
              
              </span>
              <span> {deliveryTime} MINS</span>
            </h4>
            <h3>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>

      <div className="menu-main">
        <h2>Menu</h2>
        <h3 className="items">{itemCards.length} items</h3>
        <div className="menu-main-card-container">
          {itemCards.map((item) => (
            <div key={item.card.info.id} className="menu-card">
              <div className="menu-card-left">
                <h2 className="menu-name">{item.card.info.name}</h2>
                <h3 className="menu-price">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </h3>
                <h4 className="menu-description">
                  {item.card.info.description}
                </h4>
              </div>
              <div className="menu-card-right">
                <img src={IMG_URL + item.card.info.imageId} alt="Menu Info" />
              </div>
            </div>
          ))}

          {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;