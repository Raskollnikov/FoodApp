import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default",
  theme: true,
});

export default UserContext;
