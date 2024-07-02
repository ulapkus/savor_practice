import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

const SkeletonItem = ({ width, height }) => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [width]);

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={[styles.skeletonItem, { width, height }]} />
      <Animated.View
        style={[
          styles.shimmer,
          {
            width: width * 2,
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  skeletonItem: {
    backgroundColor: "#E1E9EE",
    borderRadius: 4,
    marginBottom: 10,
  },
  shimmer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});

export default SkeletonItem;
