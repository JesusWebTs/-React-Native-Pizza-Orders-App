import { useContext, useEffect, useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { SliderCarrucel } from "../../components";
import pizzaTypes from "../../assets/pizzaTypes";
import styles from "./styles";
import { ShopCartContext } from "../../context/ShopCartContext";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const NewOrder = ({ navigation }) => {
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("M");
  const [totalPrice, setTotalPrice] = useState(0);
  const { setPizzaOrders } = useContext(ShopCartContext);
  useEffect(() => {
    setTotalPrice(data.price ? count * parseFloat(data.price[size]) : 0);
    return () => {};
  }, [data]);

  useEffect(() => {
    setTotalPrice(data.price ? count * parseFloat(data.price[size]) : 0);
    return () => {};
  }, [size]);

  useEffect(() => {
    if (count < 1) setCount(1);
    setTotalPrice(data.price ? count * parseFloat(data.price[size]) : 0);
    return () => {};
  }, [count]);

  const makeOrder = () => {
    setPizzaOrders((prev) => [
      ...prev,
      {
        pizzaInfo: data,
        count,
        totalPrice,
        size,
        uuid: uuidv4(),
        time: Date.now(),
      },
    ]);
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 300,
        }}
      >
        <SliderCarrucel data={pizzaTypes} selectPizza={setData} />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.tittleStyle}>{data.name}</Text>
        <Text style={styles.paragraphStyle}>{data.description}</Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: 250,
        }}
      >
        <View style={styles.sizeSectionStyle}>
          <TouchableHighlight
          underlayColor="#888"
            style={styles.buttonStyle}
            onPress={() => setSize("S")}
          >
            <Text style={styles.textButton}>S</Text>
          </TouchableHighlight>
          <TouchableHighlight
          underlayColor="#888"
            style={styles.buttonStyle}
            onPress={() => setSize("M")}
          >
            <Text style={styles.textButton}>M</Text>
          </TouchableHighlight>
          <TouchableHighlight
          underlayColor="#888"
            style={styles.buttonStyle}
            onPress={() => setSize("L")}
          >
            <Text style={styles.textButton}>L</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.addSectionStyle}>
          <View style={styles.addStyle}>
            <TouchableHighlight
            underlayColor="#888"
              style={[styles.buttonStyle, styles.buttonStyleSmall]}
              onPress={() => setCount((prev) => prev - 1)}
            >
              <Text style={[styles.textButton, styles.textButtonBig]}>-</Text>
            </TouchableHighlight>
            <Text style={{ fontSize: 20 }}>{count}</Text>
            <TouchableHighlight
            underlayColor="#888"
              style={[styles.buttonStyle, styles.buttonStyleSmall]}
              onPress={() => setCount((prev) => prev + 1)}
            >
              <Text style={[styles.textButton, styles.textButtonBig]}>+</Text>
            </TouchableHighlight>
          </View>
          <View>
            <Text style={{ fontSize: 20 }}>
              {totalPrice} {data.currency}
            </Text>
          </View>
        </View>
        <View>
          <TouchableHighlight
          underlayColor="#888"
            style={[styles.buttonStyle, styles.buttonStyleLarge]}
            onPress={makeOrder}
          >
            <Text style={styles.textButton}>Agregar al carrito</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};
export default NewOrder;
