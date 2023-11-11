import Card, { withIfOpened } from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { swiggy_api_URL } from "../Utilities/ConstantLinks";

import { useSelector } from "react-redux";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  console.log(filteredRestaurant[0]);
  const RestaurantIsOpen = withIfOpened(Card);

  const dark = useSelector((store) => store.dark.isDarkMode);
  let test = dark ? "bg-indigo-100" : "bg-[#fff]";

  const searchBarFunc = (result, restoraunts) => {
    const results = restoraunts.filter((each) =>
      each.info.name.toLowerCase().includes(result.toLowerCase())
    );
    return results;
  };

  // const filteredFunc = (filteredData) => {
  //   const filtered = filteredData.filter(
  //     (each) => Number(each.info.avgRating) > 4
  //   );
  //   return filtered;
  // };

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
    <main className={`w-full flex justify-center p-6 ${test}`}>
      <div className="w-[80%] flex flex-col">
        <div className="w-full  flex justify-center">
          <div className="f-full md:w-6/12 flex justify-center p-3 mt-5">
            <input
              type="text"
              placeholder="Search....."
              className="outline-none border h-full w-[80%] rounded-tl-3xl rounded-bl-3xl pl-5 text-xl"
              maxLength={18}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-green-500 cursor-pointer font-bold text-white p-2 rounded-tr-3xl rounded-br-3xl w-[20%]"
              onClick={() => {
                const res = searchBarFunc(search, data);
                setFilteredRestaurant(res);
              }}
            >
              search
            </button>
          </div>
        </div>
        {/* <button
            onClick={() => {
              setFilteredRestaurant(filteredFunc(filteredRestaurant));
            }}
            className="ml-3  px-4 py-1 rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 cursor-pointer"
          >
            Top
          </button> */}

        {data?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="w-full pb-10 mt-10 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-7">
            {filteredRestaurant?.map((each) => (
              <Link key={each.info.id} to={`restaurants/${each.info.id}`}>
                {each.info.isOpen ? (
                  <RestaurantIsOpen {...each.info} />
                ) : (
                  <Card {...each.info} />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;
