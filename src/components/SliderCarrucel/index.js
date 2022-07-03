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
const CONTAINER_WIDTH = screenSize.width;

export default function SliderCarrucel({ data = [], selectPizza }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const MARGIN = (screenSize.width - CONTAINER_WIDTH) / 2;
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const onViewRef = useRef(({ viewableItems }) => {
    selectPizza(viewableItems[0].item);
  });

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
        contentContainerStyle={{
          marginTop: 0,
        }}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        snapToInterval={screenSize.width}
        decelerationRate={100}
        scrollEventThrottle="normal"
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
                display: "flex",
                alignItems: "center",
              }}
            >
              <Animated.View
                style={{
                  marginHorizontal: GAP,
                  padding: 0,
                  borderRadius: 500,
                  backgroundColor: "#FFF",
                  transform: [{ translateY }],
                }}
              >
                <Image source={item.img} style={[style.posterImage]} />
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
    width: CONTAINER_WIDTH * 0.8,
    height: CONTAINER_WIDTH * 0.8,
    resizeMode: "cover",
    borderRadius: 50,
    margin: 0,
  },
});
