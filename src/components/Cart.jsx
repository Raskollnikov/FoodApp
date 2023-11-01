import { useSelector } from "react-redux/es/hooks/useSelector";
import { removeItem } from "../Utilities/cartSlice";
import { useDispatch } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../Utilities/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

function Cart() {
  const data = useSelector((each) => each.cart.items);
  const set = new Set([...data]);
  let da = Array.from(set);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-6 m-10">
      {da.length ? (
        <button onClick={() => dispatch(clearCart())}>Clear Everything</button>
      ) : (
        <div className="w-full h-[60vh] flex flex-col gap-5 justify-center items-center ">
          <div className="flex">
            <AiOutlineShoppingCart size={40} />
            <p className="text-3xl font-bold">Oops... Cart is empty</p>
          </div>
          <div>
            <NavLink to="/">
              <div
                className="font-bold flex items-center text-white justify-center
               border-2 border-[#363534] px-4 py-2 gap-4 rounded-2xl bg-[#363534] 
               hover:bg-transparent hover:text-[#363534] hover:font-bold  transition duration-500"
              >
                <BsArrowLeftShort size={32} />
                <p>Go back</p>
              </div>
            </NavLink>
          </div>
        </div>
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
