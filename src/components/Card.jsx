import { FaStar } from "react-icons/fa";

const Card = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  aggregatedDiscountInfoV3,
  lastMileTravelString,
  costForTwo,
  avgRating,
}) => {
  // const rating = Math.min(Math.max(parseInt(avgRating), 1), 5);
  // const stars = Array.from({ length: rating }, (_, index) => (
  //   <FaStar key={index} className="text-white" />
  // ));
  return (
    <div
      className={`select-none flex flex-col w-full shadow-xl relative p-3 rounded-xl justify-between items-start 
      cursor-pointer bg-white gap-1 hover:scale-105 transition-all duration-150`}
    >
      <img
        className="w-full rounded-xl "
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <div className=" flex flex-col justify-between items-start gap-2 ">
        <h2 className="font-bold">{name.slice(0, 18)}</h2>

        <h4 className=" flex   text-center">
          {cuisines.slice(0, 2).join(", ")}
        </h4>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div
          className={`flex items-center gap-1.5 ${
            avgRating >= 4 ? "bg-green-500" : "bg-red-500"
          } p-1.5 rounded-xl mt-2 mb-2 justify-center`}
        >
          <div className="flex text-white">
            <FaStar />
          </div>

          <h4 className="text-white ">{avgRating.toFixed(1)}</h4>
        </div>

        <span className="flex justify-evenly ">
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwo}</h4>
        </span>
      </div>
    </div>
  );
};

export const withIfOpened = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="relative shadow-xl bg-green-500 text-white px-3 py-1 rounded-xl top-[12px] right-[5px] z-10">
          Open
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
