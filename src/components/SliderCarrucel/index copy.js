import React, { useState, useRef, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
} from "react-native";

const screenSize = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};
const GAP = 10;
const CONTAINER_WIDTH = screenSize.width * 0.8;

export default function SliderCarrucel({ data = [] }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const MARGIN = (screenSize.width - CONTAINER_WIDTH) / 2;

  return (
    <SafeAreaView styles={style.container}>
      <Animated.FlatList
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          }
        )}
        horizontal={true}
        data={data}
        key={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={({ changed, viewableItems }) => {
          console.log(viewableItems[0]);
        }}
        snapToInterval={screenSize.width}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * CONTAINER_WIDTH,
            index * CONTAINER_WIDTH,
            (index + 1) * CONTAINER_WIDTH,
          ];
          const outputRange = [0, -50, 0];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange,
          });
          return (
            <View
              style={{
                width: screenSize.width,
                padding: MARGIN,
              }}
            >
              <Animated.View
                style={{
                  marginHorizontal: GAP,
                  padding: 0,
                  borderRadius: 500,
                  backgroundColor: "#FFF",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: [{ translateY }],
                }}
              >
                <Image source={item.img} style={style.posterImage} />
              </Animated.View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {},
  posterImage: {
    width: CONTAINER_WIDTH,
    height: CONTAINER_WIDTH,
    resizeMode: "cover",
    borderRadius: 50,
    margin: 0,
  },
});
