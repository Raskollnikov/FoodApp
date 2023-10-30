import Header from "./Header";
import { Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import appStore from "../Utilities/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
//
