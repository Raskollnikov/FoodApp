import Header from "./Header";
import { Outlet } from "react-router-dom";
// added
import { useState, useEffect } from "react";
import UserContext from "../Utilities/UserContext";

function App() {
  // added
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "arsen akhalaia",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <Header />
        {/* if path= /  */}
        {/* <MainContent /> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
//
