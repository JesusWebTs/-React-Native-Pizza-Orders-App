import { createContext, useState } from "react";

const UserContext = createContext(initialState);

const initialState = {
  logged: false,
};

function UserProvider({ children }) {
  /* const [pizzaOrders, dispathPizzaOrders] = useReducer(
    UserReducer,
    initialState
  ); */
  const [userInformation, setUserInformation] = useState({
    logged: false,
  });

  return (
    <UserContext.Provider value={{ userInformation, setUserInformation }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
