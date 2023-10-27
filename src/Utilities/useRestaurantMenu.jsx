import { useEffect, useState } from "react";
import { swiggy_Restaurant } from "./ConstantLinks";

const useRestaurantMenu = (id) => {
  const [data, setResInfo] = useState({
    ResInfo: [],
    // MenuInfo: [],
    Recomendations: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(swiggy_Restaurant + id);
      const toJson = await data.json();
      setResInfo({
        ResInfo: toJson.data?.cards[0]?.card?.card?.info,
        // MenuInfo:
        //   toJson.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card
        //     .card.itemCards,
        Recomendations:
          toJson.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
      });
    };

    fetchData(); // Call fetchData inside the useEffect
  }, [id]); // Include id as a dependency

  return data;
};

export default useRestaurantMenu;
