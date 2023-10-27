import UserContext from "../Utilities/UserContext";
import { useContext } from "react";
function Grocery() {
  const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          className="border border-black"
          onChange={(e) => setUserName(e.target.value)}
          maxLength={20}
        />
      </div>

      <h1 className="my-10 text-5xl font-bold text-center uppercase">
        {loggedInUser}
      </h1>
    </div>
  );
}

export default Grocery;
