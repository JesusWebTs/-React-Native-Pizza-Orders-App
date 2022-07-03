import * as React from "react";
import { NewOrderStack } from "../StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import * as Screen from "../../screens";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Ordenes"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Ordenes") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Nueva Orden.") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Ordenes" component={Screen.OrdersList} />
      <Tab.Screen
        name="Nueva Orden."
        options={{ headerShown: false }}
        component={NewOrderStack}
      />
    </Tab.Navigator>
  );
}
