import { NavLink } from "react-router-dom";
function Error() {
  return (
    <>
      <div className="w-full flex h-[100vh] justify-center items-center flex-col gap-3 bg-gray-100">
        <h2 className="text-xl">
          <span className="text-red-600 font-bold text-4xl">oops!....</span> An
          error occurred.
        </h2>
        <p className="text-xl">
          Something went wrong. Please click the button to go back to the main
          page.
        </p>
        <NavLink to="/" className="">
          <button className="p-2 cursor-pointer bg-green-500 text-white rounded-xl mt-4">
            Go Home
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Error;
