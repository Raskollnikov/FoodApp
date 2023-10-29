import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "../Utilities/UserContext";
import { Provider } from "react-redux";
import appStore from "../Utilities/appStore";

function App() {
  const [theme, setTheme] = useState(false);
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "arsen akhalaia",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedInUser: userName, setUserName, theme, setTheme }}
      >
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
//
