import { createContext, useReducer, useState } from "react";

const OrdersContext = createContext(initialState);

const initialState = {
  pizzaOrders: [],
};

const OrdersReducer = (state = initialState, payLoad = {}) => {
  switch (payLoad.type) {
    case "new-order":
      return [...state.pizzaOrders, payLoad.data];

    case "delete-order":
      //TODO Eliminar Orden Por id
      return { ...state, pizzaOrders };
    case "orders":
      return [...state.pizzaOrders];
    case "order amount":
      return state.pizzaOrders.length;
  }
};

function OrdersProvider({ children }) {
  /* const [pizzaOrders, dispathPizzaOrders] = useReducer(
    OrdersReducer,
    initialState
  ); */
  const [pizzaOrders, setPizzaOrders] = useState([]);

  return (
    <ShopCartContext.Provider value={{ pizzaOrders, setPizzaOrders }}>
      {children}
    </ShopCartContext.Provider>
  );
}

export { OrdersContext, OrdersProvider };
