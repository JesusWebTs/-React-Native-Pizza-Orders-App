import { createContext, useReducer, useState } from "react";

const initialState = {
  pizzaOrdersBought: [],
};
const OrdersContext = createContext(initialState);

function OrdersProvider({ children }) {
  const [pizzaOrdersBought, setPizzaOrdersBought] = useState();

  return (
    <OrdersContext.Provider value={{ pizzaOrdersBought, setPizzaOrdersBought }}>
      {children}
    </OrdersContext.Provider>
  );
}

export { OrdersContext, OrdersProvider };
