import { useState } from "react";
import useOnlineStatus from "../Utilities/UseOnlineStatus";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isDark } from "../Utilities/darkMode";

import {
  FaPizzaSlice,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaMoon,
} from "react-icons/fa";
import { BiSolidSun } from "react-icons/bi";

const Header = () => {
  const online = useOnlineStatus();
  const [show, isShow] = useState(false);
  const handleClose = () => isShow(!show);
  const dark = useSelector((store) => store.dark.isDarkMode);

  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  online ? "online" : "ofline";
  let test = dark ? "bg-blue-950" : "bg-[#fff]";
  let textTest = dark ? "text-white" : "text-black";
  return (
    <>
      <header className={`w-full p-4 flex justify-around items-center ${test}`}>
        <div
          className={`w-[60%] flex items-center justify-between ${textTest}`}
        >
          <Link
            to="/"
            className={`${textTest} pl-4 text-5xl  select-none cursor-pointer font-bold
             uppercase color-red text-green-600`}
          >
            <FaPizzaSlice />
          </Link>
          <p className="text-white select-none cursor-pointer ">
            {online ? (
              <span className="bg-green-500 rounded-md p-2">online</span>
            ) : (
              <span className="bg-red-500 rounded-md p-2">ofline</span>
            )}
          </p>
          <nav
            className={`hidden md:flex gap-5 text-xl cursor-pointer spacing ${textTest}`}
          >
            <Link to="choice">Choose</Link>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/groceries">Groceries</Link>

            {/* Added Last */}
            <Link to="/millionaires">Millionaires</Link>
            {/* for Context Learning */}
            <Link to="cart">
              <div className="flex items-center gap-2 justify-center">
                <FaShoppingCart className="text-green-500" size={25} />
                {cart.length}
              </div>
            </Link>
          </nav>
        </div>
        <div>
          {" "}
          {dark ? (
            <BiSolidSun
              onClick={() => dispatch(isDark())}
              className="text-yellow-300 cursor-pointer font-bold"
              size={32}
            />
          ) : (
            <FaMoon
              onClick={() => dispatch(isDark())}
              className={`text-gray-700 cursor-pointer ${textTest}`}
              size={32}
            />
          )}
        </div>

        <div className="md:hidden mr-3" onClick={() => isShow(!show)}>
          {show ? (
            <FaTimes className="w-5 " size={24} />
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
