const SwipeList = ({ data }) => {
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
    </View>
  );
};
