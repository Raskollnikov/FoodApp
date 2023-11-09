import { FaStar } from "react-icons/fa";

const Card = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwo,
  avgRating,
}) => {
  const rating = Math.min(Math.max(parseInt(avgRating), 1), 5);
  const stars = Array.from({ length: rating }, (_, index) => (
    <FaStar key={index} className="text-white" />
  ));
  return (
    <div
      className="flex flex-col  border relative
    rounded-xl justify-between items-center cursor-pointer"
    >
      <img
        className="w-full rounded-xl"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <div className=" flex flex-col justify-between items-center p-3 gap-2 ">
        <h2 className="font-bold">{name}</h2>

        <h4 className=" flex justify-center items-center  text-center">
          {cuisines.join(", ")}
        </h4>
      </div>
      <h4>{area}</h4>
      {/* stars */}
      <div className="flex flex-col mt-2">
        <div
          className={`flex items-center gap-1 ${
            avgRating >= 4 ? "bg-green-500" : "bg-yellow-500"
          } p-1 rounded-xl mt-2 mb-2 justify-center`}
        >
          <div className="flex text-white">{stars}</div>
          <h4 className="text-white ">{avgRating}</h4>
        </div>

        <span className="flex justify-evenly ">
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwo}</h4>
        </span>
      </div>
    </div>
  );
};

// Higher Order Component

/*

      <div className="absolute left-[-10px] top-[-10px] ">
        {isOpened ? (
          <div className="bg-red-400 text-white px-3 py-1 rounded-xl ">
            closed
          </div>
        ) : (
          <div className="bg-green-500 text-white px-3 py-1 rounded-xl">
            open
          </div>
        )}
      </div>
 */

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
