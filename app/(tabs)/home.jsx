import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "#FC7326",
          width: "100%",
          height: "10%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://i.ibb.co/0CxhpnP/Screenshot-2024-07-02-at-9-59-08-AM.png",
          }}
          style={{ width: 150, height: 40 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#F9A578",
          width: "100%",
          height: "7%",
        }}
      >
        <Text style={{ color: 'white', fontSize: '5'}}>
          Good Morning, Ula L.
        </Text>
        <Text style={{ fontSize: 15 }}>Salt Lake City 84111</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Search food</Text>
        <Text>?</Text>
        <Text>Shopping Cart</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy142nhzm490EEmiq2ss5EEnFKiSOCsnPZNw&s",
            }}
            style={{ width: 75, height: 75 }}
          ></Image>
          <Text>American</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy142nhzm490EEmiq2ss5EEnFKiSOCsnPZNw&s",
            }}
            style={{ width: 75, height: 75 }}
          ></Image>
          <Text>Asian</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy142nhzm490EEmiq2ss5EEnFKiSOCsnPZNw&s",
            }}
            style={{ width: 75, height: 75 }}
          ></Image>
          <Text>Italian</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy142nhzm490EEmiq2ss5EEnFKiSOCsnPZNw&s",
            }}
            style={{ width: 75, height: 75 }}
          ></Image>
          <Text>Indian</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Available Now</Text>
        <Text>View All</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy142nhzm490EEmiq2ss5EEnFKiSOCsnPZNw&s",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>heart</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy142nhzm490EEmiq2ss5EEnFKiSOCsnPZNw&s",
                }}
                style={{ width: 75, height: 75 }}
              ></Image>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Great Harvest</Text>
                <Text>Bakery</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <Text>17774 N University Ave, Provo...</Text>
        <Text>Time Left to Order: 8 hours 29 min</Text>
        <Text>37 miles</Text>
      </View>
      <View>
        <Text>Favorite Restaraunts</Text>
      </View>
      <View>
        <Text>Most Popular</Text>
      </View>
    </View>
  );
};

export default Home;
