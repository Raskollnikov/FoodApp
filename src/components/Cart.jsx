import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utilities/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

function Cart() {
  const data = useSelector((each) => each.cart.items);

  const set = new Set([...data]);
  let da = Array.from(set);
  const dispatch = useDispatch();
  let total = data.reduce((total, item) => total + item.price, 0);

  console.log(data);

  return (
    <div className="flex flex-col items-center gap-6 m-10">
      {da.length ? (
        <div className="w-[70%] flex flex-col gap-5 rounded-3xl shadow-2xl p-5 text-[#474747]">
          <div className="w-[90%]  m-auto flex justify-between text-2xl font-bold select-none">
            <p className="text-2xl font-bold select-none">
              total:{(total / 1000).toFixed(1)}$
            </p>
            <p className="text-2xl font-bold select-none">Cart Items</p>
            <button
              className="text-red-500"
              onClick={() => dispatch(clearCart())}
            >
              Clear All
            </button>
          </div>
          <div className="w-[90%] m-auto mt-4 flex flex-col gap-7">
            {da.map((each) => (
              <CartItem key={each.id} data={each} items={data} id={each.id} />
            ))}
          </div>
        </div>
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
    </div>
  );
}

export default Cart;
