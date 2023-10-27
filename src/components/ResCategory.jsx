import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { IMG_CDN_URL } from "../Utilities/ConstantLinks";

//  Component of Individual List Cart

const ItemsList = ({ price, name, description, id, defaultPrice, imageId }) => {
  const image = "sppxmfyulsq2ncy0smx1";

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
        <button className="px-2 py-1 cursor-pointer bg-white shadow-lg absolute m-auto bottom-[-15px] left-[45px]">
          Add +
        </button>
      </div>
    </div>
  );
};
//
function ResCategory({ data, showItems, setShowIndex }) {
  const { itemCards, title } = data;

  return (
    <div>
      <div className="m-auto my-2 p-2 gap-1 cursor-pointer w-6/12 shadow-md border bg-gray-100">
        <div
          className="font-bold text-lg flex justify-between"
          onClick={setShowIndex}
        >
          <div>
            {title}({itemCards?.length})
          </div>
          <div>{showItems ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</div>
        </div>

        {showItems && (
          <div>
            {itemCards.map((each) => (
              <ItemsList key={each.card.info.id} {...each.card.info} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResCategory;
