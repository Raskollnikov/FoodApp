import { useState } from "react";
import useOnlineStatus from "../Utilities/UseOnlineStatus";
import { Link } from "react-router-dom";

import {
  // FaSun,
  // FaMoon,
  FaPizzaSlice,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const online = useOnlineStatus();
  const [show, isShow] = useState(false);
  const handleClose = () => isShow(!show);

  // Subscribing to a store usinng a Selector!!!

  const cart = useSelector((store) => store.cart.items);

  online ? "online" : "ofline";
  return (
    <>
      <header className="w-full border p-4 flex justify-between items-center">
        <Link
          to="/"
          className="pl-4 text-5xl select-none cursor-pointer font-bold
             uppercase color-red text-green-600"
        >
          <FaPizzaSlice />
        </Link>
        {/* <p className="text-white">
        {online ? (
          <span className="bg-green-500 rounded-md p-2">online</span>
        ) : (
          <span className="bg-red-500 rounded-md p-2">ofline</span>
        )}
      </p> */}
        <nav className="hidden md:flex gap-5 text-xl cursor-pointer spacing">
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/groceries">Groceries</Link>

          {/* Added Last */}
          <Link to="/millionaires">Millionaires</Link>
          {/* for Context Learning */}
          <Link to="cart">
            <div className="flex items-center gap-2 justify-center">
              <FaShoppingCart /> ({cart.length} items)
            </div>
          </Link>
          {/* <Link>{loggedInUser}</Link> */}
        </nav>
        {/* Dark / light  */}
        <div className="mr-3">
          {/* {theme ? (
            <FaMoon
              onClick={() => setTheme(!theme)}
              className="text-grey-700 cursor-pointer"
              size={30}
            />
          ) : (
            <FaSun
              onClick={() => setTheme(!theme)}
              className="text-yellow-450 cursor-pointer"
              size={30}
            />
          )} */}
        </div>

        <div className="md:hidden mr-3" onClick={() => isShow(!show)}>
          {show ? (
            <FaTimes className="w-5" size={24} />
          ) : (
            <FaBars className="w-5" size={24} />
          )}
        </div>
      </header>

      <ul className={!show ? "hidden" : "bg-zinc-150 w-full px-8 py-5"}>
        {/* border-b-2 */}
        <li className="test">
          <Link to="/restaurants" onClick={handleClose}>
            Restaurants
          </Link>
        </li>
        <li className="test">
          <Link to="/about" onClick={handleClose}>
            About
          </Link>
        </li>
        <li className="test">
          <Link to="/groceries" onClick={handleClose}>
            Groceries
          </Link>
        </li>
        <li className="test">
          <Link to="/millionaires" onClick={handleClose}>
            Millionaires
          </Link>
        </li>
        <li className="test">
          <Link to="cart">
            <div className="flex items-center gap-2 justify-center">
              <FaShoppingCart /> (0 items)
            </div>
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className=" bg-green-400 px-8 py-3 mb-4 text-white font-bold">
            Sign In
          </button>
          <button className="px-8 py-3 mb-3">Sign Up</button>
        </div>
      </ul>
    </>
  );
};

export default Header;
