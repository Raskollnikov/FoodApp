const ShimmerCard = () => {
  return (
    <div
      className="flex flex-col gap-2 border bg-white
rounded-xl justify-between items-center cursor-pointer h-[300px] w-[170px]"
    >
      <div className=" rounded-xl bg-gray-200 w-[170px] h-[107px]"></div>
      <h2 className="bg-gray-300 w-[50px] h-[4px] rounded-sm"></h2>

      <div className="flex flex-col gap-2">
        <div className="bg-gray-300 w-[80px] h-[4px] rounded-xl"></div>
        <div className="bg-gray-300 w-[80px] h-[4px] rounded-xl"></div>
        <div className="bg-gray-300 w-[80px] h-[4px] rounded-xl"></div>
      </div>

      <span className="flex justify-evenly gap-2 mb-2">
        <div className="bg-gray-300 w-[80px] h-[8px] rounded-md"></div>
      </span>
    </div>
  );
};

const ShimmerParent = ({ children }) => {
  return (
    <div className="w-full p-3 grid xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-4 ">
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
