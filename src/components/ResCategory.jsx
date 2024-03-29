import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import ItemsList from "./ItemsList";

function ResCategory({ data, showItems, setShowIndex }) {
  const { itemCards, title } = data;
  return (
    <div>
      <div
        className="w-11/12  m-auto rounded-xl p-5 my-3 gap-1 cursor-pointer md:w-6/12 shadow-md
        bg-gray-100"
      >
        <div
          className="border p-4  font-bold text-lg flex justify-between"
          // this changed
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
              <ItemsList key={each.card.info.id} data={each.card.info} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResCategory;
