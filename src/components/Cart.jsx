import { useSelector } from "react-redux/es/hooks/useSelector";
import { removeItem } from "../Utilities/cartSlice";
import { useDispatch } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../Utilities/cartSlice";

function Cart() {
  const data = useSelector((each) => each.cart.items);
  const set = new Set([...data]);
  let da = Array.from(set);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-6 m-10">
      cart
      {da.length && (
        <button onClick={() => dispatch(clearCart())}>Clear Everything</button>
      )}
      <div className="w-6/12">
        <div>
          {da.map((each) => (
            <div key={each.id}>
              <ItemsList key={each.id} data={each} />
              <button onClick={() => dispatch(removeItem({ id: each.id }))}>
                removeItem
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
