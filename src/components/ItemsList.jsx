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
      className="flex justify-between border-b-2 border-gray-400 px-4 py-2"
    >
      <div className="w-9/12">
        <p>
          {price ? (price / 1000).toFixed(1) : (defaultPrice / 1000).toFixed(1)}
          $
        </p>
        <p className="font-bold">{name}</p>
        <h3 className="text-xs">{description}</h3>
      </div>
      <div className="w-3/12 relative">
        {imageId ? (
          <img src={IMG_CDN_URL + imageId} alt={name} />
        ) : (
          <img src={IMG_CDN_URL + image} alt={name} />
        )}
        <button
          onClick={() => handleAddItem(data)}
          className="px-2 py-1 cursor-pointer bg-white shadow-lg absolute m-auto bottom-[-15px] left-[45px]"
        >
          Add +
        </button>
      </div>
    </div>
  );
};
export default ItemsList;
