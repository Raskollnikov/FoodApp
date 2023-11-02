import { IMG_CDN_URL } from "../Utilities/ConstantLinks";
import { FaDiscourse, FaStar } from "react-icons/fa";
import { removeItem, addItem, removeTest } from "../Utilities/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ data, id, items }) {
  const { name, imageId, category, price } = data;
  const { rating } = data.ratings.aggregatedRating;
  const dispatch = useDispatch();
  const image = "sppxmfyulsq2ncy0smx1";

  return (
    <div className="flex justify-between">
      {imageId ? (
        <img
          src={IMG_CDN_URL + imageId}
          alt={name}
          className="h-full w-[200px]"
        />
      ) : (
        <img
          src={IMG_CDN_URL + image}
          alt={name}
          className="h-full w-[200px]"
        />
      )}

      <div className="h-full flex flex-col gap-3">
        <p className="font-bold text-3xl">{name.slice(0, 10)}</p>
        <h6 className="text-[10px] font-bold ml-1 mt-1">{category}</h6>
        <div className="flex items-center gap-1">
          <h4 className="font-bold">{rating}</h4>
          <FaStar className="mt-.5 text-green-600" />
        </div>
      </div>

      <div className="h-full  mt-10 flex gap-2 items-center">
        <button
          className="p-2 bg-gray-400 rounded-full"
          onClick={() => dispatch(addItem(data))}
        >
          +
        </button>
        <p>{items.filter((each) => each.id == id).length}</p>
        <button
          className="p-2 bg-gray-400 rounded-full"
          onClick={() =>
            dispatch(removeTest([items.find((item) => item.id === id)]))
          }
        >
          -
        </button>
      </div>
      <div className="mt-2 pr-3">
        <p className="font-bold select-none  ">{(price / 1000).toFixed(1)}$</p>
        <button
          className="underline text-red-600 mt-2"
          onClick={() => dispatch(removeItem({ id }))}
        >
          remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
