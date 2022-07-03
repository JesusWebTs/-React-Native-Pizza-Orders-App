import * as React from "react";
import { OrdersProvider } from "./context/OrdersContext";
import { ShopCartProvider } from "./context/ShopCartContext";
import { UserProvider } from "./context/UserProvider";
import { StackNavigator } from "./navigator";

export default function Main() {
  return (
    <UserProvider>
      <OrdersProvider>
        <ShopCartProvider>
          <StackNavigator.MainStack />
        </ShopCartProvider>
      </OrdersProvider>
    </UserProvider>
  );
}
