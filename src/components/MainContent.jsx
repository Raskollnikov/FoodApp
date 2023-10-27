import Card, { withIfOpened } from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { swiggy_api_URL } from "../Utilities/ConstantLinks";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantIsOpen = withIfOpened(Card);
  // IsOpen aggregatedDiscountInfoV3.header

  const searchBarFunc = (result, restoraunts) => {
    const results = restoraunts.filter((each) =>
      each.info.name.toLowerCase().includes(result.toLowerCase())
    );
    return results;
  };

  const filteredFunc = (filteredData) => {
    const filtered = filteredData.filter(
      (each) => Number(each.info.avgRating) > 4
    );
    return filtered;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(swiggy_api_URL);
      const toJson = await data.json();

      setData(
        toJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        toJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <main className="w-full flex justify-center p-6 ">
      <div className="w-[80%] flex flex-col ">
        <div className="w-[80%] flex flex-col  md:flex-row gap-2 items-start md:items-center justify-around md:gap-20 m-10 ">
          <div className=" rounded-3xl  flex justify-between">
            <input
              type="text"
              placeholder="enter"
              className="outline-none  md:w-[300px] "
              maxLength={18}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-green-500 cursor-pointer text-white p-2 rounded-tr-3xl rounded-br-3xl"
              onClick={() => {
                const res = searchBarFunc(search, data);
                setFilteredRestaurant(res);
              }}
            >
              search
            </button>
          </div>
          <button
            onClick={() => {
              setFilteredRestaurant(filteredFunc(filteredRestaurant));
            }}
            className="ml-3  px-4 py-1 rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 cursor-pointer"
          >
            Top
          </button>

          {/* <div>
            <label htmlFor="input">Name:</label>
            <input />
          </div> */}
        </div>
        {data.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="w-full p-3 grid grid-cols-1 xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-4">
            {filteredRestaurant.map((each) => (
              <Link key={each.info.id} to={`restaurants/${each.info.id}`}>
                {each.info.isOpen ? (
                  <RestaurantIsOpen {...each.info} />
                ) : (
                  <Card {...each.info} />
                )}
                {/* <Card {...each.info} /> */}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;
