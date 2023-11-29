import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import RestaurantShimmer from "./RestaurantShimmer";
import { IMG_CDN_URL } from "../Utilities/ConstantLinks";
import useRestaurantMenu from "../Utilities/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const { ResInfo, Recomendations } = useRestaurantMenu(id);
  const dark = useSelector((store) => store.dark.isDarkMode);
  let test = dark ? "bg-indigo-100" : "bg-[#fff]";
  const itemsCategory = Recomendations?.filter(
    (each) =>
      each?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const togglePanel = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <>
      {ResInfo.length == 0 ? (
        <RestaurantShimmer />
      ) : (
        <div className={`w-[100%]   ${test}`}>
          {/* About Burger */}
          <div className="w-full bg-black p-8 flex items-center justify-center flex-wrap">
            {/* added */}
            <div className="w-[90%]">
              <div className="flex gap-10 p-2 flex-wrap justify-center">
                <img
                  src={IMG_CDN_URL + ResInfo.cloudinaryImageId}
                  className="w-[250px] rounded-md"
                />
                <div className="text-white flex flex-col justify-around p-1">
                  <p className="text-4xl md:text-4xl tracking-wide  ">
                    {ResInfo.name}
                  </p>
                  <p className="text-md text-gray-400">
                    {ResInfo.cuisines.join(", ")}
                  </p>

                  {/*Delivery - Time - Cost For Two  */}
                  <div className="flex items-center mt-3 gap-2 justify-center md:justify-start">
                    {/* Rating */}
                    <div className="flex items-center gap-1 bg-green-500 w-[50px] p-1 rounded-xl justify-center">
                      <div className="flex text-white">{<FaStar />}</div>
                      <h4 className="text-white ">{ResInfo.avgRating}</h4>
                    </div>
                    <span>|</span>
                    {/* delivery Time */}
                    <p>
                      {ResInfo.sla ? ResInfo.sla.deliveryTime || 3 : 3} mins
                    </p>
                    <span>|</span>
                    <p>{ResInfo.costForTwoMessage}</p>
                  </div>
                </div>
              </div>
              {/* added */}
            </div>
          </div>

          {/* Categories */}
          <div className="w-full p-6 my-1 ">
            {itemsCategory?.map((each, i) => {
              return (
                <ResCategory
                  key={each.card.card.title}
                  data={each?.card?.card}
                  showItems={i == showIndex ? true : false}
                  setShowIndex={() => togglePanel(i)}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
