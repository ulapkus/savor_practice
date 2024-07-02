import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import SkeletonScreen from "./skeletonscreen";

const MainComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setData({
        imageUrl: "https://example.com/image.jpg",
        title: "Sample Title",
        description: "This is a sample description.",
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <SkeletonScreen />;
  }

  return (
    <View style={{ padding: 20 }}>
      <Image
        // source={{ uri: data.imageUrl }}
        style={{ width: 200, height: 200, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
        {data.title}
      </Text>
      <Text style={{ fontSize: 14 }}>{data.description}</Text>
    </View>
  );
};

export default MainComponent;
