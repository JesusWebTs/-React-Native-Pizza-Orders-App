import { Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as Screen from "../../../screens";
import React, { useContext } from "react";
import { ShopCartContext } from "../../../context/ShopCartContext";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { pizzaOrders } = useContext(ShopCartContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Nueva Orden"
        component={Screen.NewOrder}
        options={({ navigation, route }) => ({
          headerRight: ({}) => (
            <Pressable
              onPress={() => {
                navigation.navigate("Carrito");
              }}
              color="#fff"
              style={{
                padding: 10,
                display: "flex",
                flexDirection: "row",
                position: "relative",
              }}
            >
              <Ionicons name="cart" color="gray" size={40} />
              <Text
                style={{
                  backgroundColor: "red",
                  width: 20,
                  height: 20,
                  color: "white",
                  borderRadius: 15,
                  display: "flex",
                  lineHeight: 20,
                  position: "absolute",
                  textAlign: "center",
                  right: 0,
                  top: 10
                }}
              >
                {pizzaOrders.length}
              </Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="Carrito" component={Screen.Car} />
    </Stack.Navigator>
  );
}
