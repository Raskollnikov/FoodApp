// import pizza from "../images/pizza.avif";
// import { NavLink } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
// const MainContent = () => {
//   return (
//     <div className="max-w-[1640px] mx-auto p-4 ">
//       <div className="max-h-[470px] relative">
//         <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center ">
//           <h1 className="px-4  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
//             Lafsha's
//         //               </div>
//             </div>
//           </NavLink>
//         </div>
//         <img
//           className="w-full max-h-[470px] object-cover"
//           src={pizza}
//           alt="hero_bg"
//         />
//       </div>
//     </div>
//   );
// };  </h1>
//           <h1 className="px-4  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
//             <span className="text-orange-500">Food</span> Delivery
//           </h1>
//           <NavLink
//             to="/restaurants"
//             className="absolute text-2xl  right-[300px]"
//           >
//             <div className="flex gap-5 items-center p-3 font-bold cursor-pointer">
//               restaurants
//               <div>
//                 <FaArrowRight className="" />

// export default MainContent;

import Card, { withIfOpened } from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { swiggy_api_URL } from "../Utilities/ConstantLinks";
import { useParams } from "react-router-dom";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const { id } = useParams();
  console.log(id);
  const RestaurantIsOpen = withIfOpened(Card);
  // IsOpen aggregatedDiscountInfoV3.header

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
    <main className="w-full flex justify-center p-6 ">
      <div className="w-[80%] flex flex-col">
        <div className="w-full  flex justify-center">
          <div className="f-full md:w-6/12 flex justify-center p-3">
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
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;
