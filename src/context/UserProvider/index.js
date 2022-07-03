import { createContext, useState } from "react";

const UserContext = createContext(initialState);

const initialState = {
  pizzaOrders: [],
};

function UserProvider({ children }) {
  /* const [pizzaOrders, dispathPizzaOrders] = useReducer(
    UserReducer,
    initialState
  ); */
  const [pizzaOrders, setPizzaOrders] = useState([]);

  return (
    <UserContext.Provider value={{ pizzaOrders, setPizzaOrders }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
