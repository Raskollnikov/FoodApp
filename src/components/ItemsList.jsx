import { IMG_CDN_URL } from "../Utilities/ConstantLinks";
import { useDispatch } from "react-redux";
import { addItem } from "../Utilities/cartSlice";

const ItemsList = ({ data }) => {
  const { price, name, description, id, defaultPrice, imageId } = data;
  const image = "sppxmfyulsq2ncy0smx1";

  const dispatch = useDispatch();

  const handleAddItem = (info) => {
    dispatch(addItem(info));
  };

  return (
    <div
      key={id}
      className=" flex flex-col md:flex-row justify-between items-start md:items-center  shadow-md rounded-xl mt-5 p-4 gap-4"
    >
      <div className="w-full md:w-3/12 flex flex-col items-center relative">
        {imageId ? (
          <img src={IMG_CDN_URL + imageId} alt={name} />
        ) : (
          <img src={IMG_CDN_URL + image} alt={name} />
        )}
        <button
          onClick={() => handleAddItem(data)}
          className="px-4 py-2 md:px-3 md:py-1 cursor-pointer bg-white absolute shadow-lg bottom-[-20px]  
"
        >
          Add +
        </button>
      </div>
      <div className="w-9/12 p-2">
        <p className="text-md ">
          {price ? (price / 1000).toFixed(1) : (defaultPrice / 1000).toFixed(1)}
          $
        </p>
        <p className="font-bold text-md mt-1">{name?.slice(0, 19)}</p>
        <h3 className="text-xs mt-1 ">{description?.slice(0, 70)}</h3>
      </div>
    </div>
  );
};
export default ItemsList;
