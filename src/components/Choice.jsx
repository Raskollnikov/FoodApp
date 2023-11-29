import { useState } from "react";
import { IMG_CDN_URL } from "../Utilities/ConstantLinks";
import { useSelector } from "react-redux";
import { PiDotBold } from "react-icons/pi";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Choice() {
  const images = useSelector((card) => card.image.initialState);
  const [data, setData] = useState(images);
  const [index, setIndex] = useState(0);

  const handleAdd = () => {
    setIndex((i) => (i < data.length - 1 ? i + 1 : 0));
  };

  const handleMinus = () => {
    setIndex((i) => (i > 0 ? i - 1 : data.length - 1));
  };

  const dark = useSelector((store) => store.dark.isDarkMode);
  let test = dark ? "bg-indigo-100" : "bg-[#fff]";

  const current = data[index];

  return (
    <div
      className={`${test} max-w-[1400px] h-[810px] lg:h-[522px] w-full m-auto py-8 px-4 relative group `}
    >
      <div
        className="m-auto w-[90%] lg:w-[60%]  h-[500px] lg:h-[400px] rounded-2xl bg-cover relative duration-500"
        style={{
          backgroundImage: `url(${IMG_CDN_URL + current.imageId})`,
        }}
      >
        <div
          className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] left-5 text-2xl 
      rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={() => handleMinus()}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        {/* Right Arrow */}
        <div
          className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] right-5 text-2xl 
      rounded-full p-2 bg-black/20 text-white cursor-pointer "
          onClick={() => handleAdd()}
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>

      <div className="flex mt-3 justify-center">
        {data.map((each, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`text-2xl cursor-pointer ${
              i === index ? "font-bold text-red-600" : ""
            }`}
          >
            <PiDotBold size={30} />
          </div>
        ))}
      </div>
    </div>
  );
}
