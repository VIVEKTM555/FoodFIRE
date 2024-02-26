import React from 'react'
import { useState, useEffect } from 'react';
import { IMG_URL } from "./config";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';


const RestrauntCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  deliveryTime,

}) => {
  return (
    <div className="res-card" style={{
      backgroundColor: '#f0f0f0',
    }}>
      <div className="card-media">
        <img src={IMG_URL + cloudinaryImageId} alt="res-card-img" />
        <div className="bookmark"></div>
      </div>

      <div className="res-card-content">


        <p style={{ margin: "0" }}>
          <strong>{name}</strong>
        </p>

        <em>{cuisines.join(', ')}</em>

        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>

      </div>
    </div>
  );
};






// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

const Ok = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  async function getRestaurants() {


    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  }



  useEffect(() => {
    getRestaurants();
  }, []);


  return listOfRestaurants.length===0? <Shimmer/>:(
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter">
      <div className="search m-4 p-4">
          <input
            type="text"
            
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setListOfRestaurants(filteredList);
            
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
          <Link 
          key={restaurant?.info?.id}
          to={'/restaurants/' + restaurant.info.id}>
          <RestrauntCard
            {...restaurant?.info}
            key={restaurant?.info?.id}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ok;