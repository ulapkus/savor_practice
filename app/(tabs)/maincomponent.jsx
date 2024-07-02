import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import SkeletonScreen from "./skeletonscreen";

const MainComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

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
    <View style={styles.container}>
      <Image source={{ uri: data.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default MainComponent;
