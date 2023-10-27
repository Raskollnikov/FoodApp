const array = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
const RestaurantShimmer = () => {
  return (
    <div className="w-[100%]">
      {/* About Burger */}
      <div className="w-full bg-black h-[240px] flex items-center justify-center ">
        <div className="flex gap-5 p-2">
          <div className="w-[230px] h-[150px] rounded-md bg-gray-300"></div>
          <div className="text-white flex flex-col justify-around p-1">
            <p className="bg-gray-400 tracking-wide w-[200px] h-[14px]">{}</p>
            <p className="bg-gray-400 w-[200px] h-[15px]">{}</p>

            {/*Delivery - Time - Cost For Two  */}
            <div className="flex items-center gap-2 ">
              {/* Rating */}
              <div className="flex items-center gap-1 bg-green-500 w-[50px] p-1 rounded-xl justify-center">
                <div className="flex w-[30px] h-[5px]">{}</div>
                <h4 className=" w-[30px] h-[5px] bg-gray-400">{}</h4>
              </div>
              <span>|</span>
              <p className="w-[40px] h-[5px] bg-gray-400"></p>
              {/* delivery Time */}
              <span>|</span>
              <p className="w-[40px] h-[5px] bg-gray-400">{}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center ">
        <div className="w-[60%] p-5 flex flex-col gap-2">
          <p className="w-[100px] h-[15px] bg-gray-200 rounded-xl"></p>
          <p className="w-[100px] h-[15px] bg-gray-200  rounded-xl"></p>
        </div>
      </div>
      <div className="w-full  flex justify-center items-center flex-col">
        {array.map((each) => {
          return (
            <div
              key={each.id}
              className="w-[60%] cursor-pointer flex justify-between  items-center p-7 shadow-md mt-3 h-[200px]"
            >
              <div>
                <p className="text-xl font-bold"></p>
                <p></p>
              </div>
              <div className="flex flex-col items-center gap-2 w-[50%]">
                <div className="w-[150px]"></div>
                <button className="bg-green-500 text-white rounded-xl px-6">
                  {" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantShimmer;
