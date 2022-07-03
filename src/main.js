import * as React from "react";
import { ShopCartProvider } from "./context/ShopCartContext";
import { UserProvider } from "./context/UserProvider";
import { StackNavigator } from "./navigator";

export default function Main() {
  return (
    <UserProvider>
      <ShopCartProvider>
        <StackNavigator.MainStack />
      </ShopCartProvider>
    </UserProvider>
  );
}
