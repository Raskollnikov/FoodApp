const ShimmerCard = () => {
  return (
    <div
      className="select-none py-3 h-[275px] flex flex-col w-full shadow-xl relative p-3 rounded-xl justify-between items-start 
      cursor-pointer bg-white gap-1"
    >
      <div className=" rounded-xl bg-gray-200 w-full h-[107px]"></div>
      <h2 className="bg-gray-300 w-[50px] h-[4px] rounded-sm"></h2>

      <div className="flex flex-col gap-2">
        <div className="bg-gray-300 w-[80px] h-[4px] rounded-xl"></div>
        <div className="bg-gray-300 w-[80px] h-[4px] rounded-xl"></div>
        <div className="bg-gray-300 w-[80px] h-[4px] rounded-xl"></div>
      </div>

      <span className="flex justify-evenly gap-2 mb-2">
        <div className="bg-gray-300 w-[30px] h-[8px] rounded-md"></div>
        <div className="bg-gray-300 w-[80px] h-[8px] rounded-md"></div>
      </span>
    </div>
  );
};

const ShimmerParent = ({ children }) => {
  return (
    <div className="w-full pb-10 mt-10 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-7 ">
      {children}
    </div>
  );
};

const Shimmer = () => {
  return (
    <ShimmerParent>
      {Array.from({ length: 15 }, () => undefined).map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </ShimmerParent>
  );
};

export default Shimmer;
