import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { ShopCartContext } from "../../context/ShopCartContext";
import { SwipeListView } from "react-native-swipe-list-view";
import Ionicons from "react-native-vector-icons/Ionicons";

const Car = () => {
  const { pizzaOrders, setPizzaOrders } = useContext(ShopCartContext);

  const VisibleItem = ({ data }) => {
    const { pizzaInfo, count, size, totalPrice, uuid, time } = data.item;

    return (
      <TouchableHighlight style={styles.rowFrontVisible}>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.title} numberOfLines={1}>
              {pizzaInfo.name}
            </Text>
            <Text style={styles.title} numberOfLines={1}>
              {count}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={[styles.title]} numberOfLines={1}>
              {`${new Date(time).toLocaleDateString()} ${new Date(
                time
              ).getHours()}:${new Date(time).getMinutes()}`}
            </Text>
            <Text
              style={[
                styles.title,
                {
                  color: "green",
                },
              ]}
              numberOfLines={1}
            >
              {totalPrice} {pizzaInfo.currency}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const closeRow = (rowMap, rowKey) => {
    console.log(rowMap);
    if (rowMap[rowKey]) {
      rowMap[rowKey].close();
    }
  };
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    let newData = pizzaOrders.map((el) => (el.uuid !== rowKey ? el : null));
    newData = newData.filter((el) => el);
    setPizzaOrders(newData);
  };

  const renderItem = (data, rowMap) => <VisibleItem data={data} />;

  const HiddenItemWithActions = (props) => {
    const { onClose, onDelete } = props;

    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft, {}]}
          onPress={onClose}
        >
          <Ionicons
            name="ios-close-circle-outline"
            size={40}
            style={{
              color: "white",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}
        >
          <Ionicons
            name="trash"
            size={40}
            style={{
              color: "white",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.uuid)}
        onDelete={() => deleteRow(rowMap, data.item.uuid)}
      />
    );
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <View>
        <SwipeListView
          data={pizzaOrders}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-150}
          disableRightSwipe
        />
      </View>
      <View>
        <TouchableHighlight
          style={{
            backgroundColor: "red",
            height: 50,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                color: "white",
              }}
            >
              Comprar
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              Total:{" "}
              {pizzaOrders.reduce(
                (acc, current) => acc + current.totalPrice,
                0
              )}{" "}
              USD
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};
export default Car;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: "flex-end",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: "#1f65ff",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#666",
  },
});
