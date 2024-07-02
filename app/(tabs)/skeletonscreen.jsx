import React from "react";
import { View, StyleSheet } from "react-native";
import ShimmerEffect from "./shimmereffect";

const SkeletonScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      <ShimmerEffect width={200} height={200} />
      <ShimmerEffect width={300} height={20} />
      <ShimmerEffect width={250} height={20} />
      <ShimmerEffect width={200} height={20} />
    </View>
  );
};

export default SkeletonScreen;
