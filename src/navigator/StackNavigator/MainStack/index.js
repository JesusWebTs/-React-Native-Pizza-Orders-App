import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Screen from "../../../screens";
import React, { useContext } from "react";
import { BottomTabNavigator } from "../../";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Screen.Login} />
        <Stack.Screen name="Loged" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
