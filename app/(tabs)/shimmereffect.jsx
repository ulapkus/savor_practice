import React, { useEffect } from "react";
import { View, Animated } from "react-native";
//creates and animates views
import { LinearGradient } from "expo-linear-gradient";
//creates gradient effects

const ShimmerEffect = ({ width, height }) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={{
        overflow: "hidden",
        backgroundColor: "#E1E9EE",
        borderRadius: 4,
        marginBottom: 10,
        width,
        height,
      }}
    >
      <View
        style={{
          backgroundColor: "#E1E9EE",
          width,
          height,
        }}
      />
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transform: [{ translateX }],
        }}
      >
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0.5)",
            "rgba(255, 255, 255, 0)",
          ]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{ flex: 1 }}
        />
      </Animated.View>
    </View>
  );
};

export default ShimmerEffect;
