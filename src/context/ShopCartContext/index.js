import { createContext, useReducer, useState } from "react";

const ShopCartContext = createContext(initialState);

const initialState = {
  pizzaOrders: [],
};

function ShopCartProvider({ children }) {
  const [pizzaOrders, setPizzaOrders] = useState([]);

  return (
    <ShopCartContext.Provider value={{ pizzaOrders, setPizzaOrders }}>
      {children}
    </ShopCartContext.Provider>
  );
}

export { ShopCartContext, ShopCartProvider };
