// import { StatusBar } from "expo-status-bar";
// import { Text, View } from "react-native";
// import { Link } from "expo-router";

// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-3xl font-pblack">Official test!</Text>
//       <StatusBar style="auto" />
//       <Link href="/home" style={{ color: "blue" }}>
//         Go to Home
//       </Link>
//     </View>
//   );
// }

import { View, Text, Image, ImageBackground, TextInput } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 0,
        padding: 0,
        gap: 0,
      }}
    >
      <View
        style={{
          backgroundColor: "#FC7326",
          width: "150%",
          height: "16%",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 18,
        }}
      >
        <Image
          source={{
            uri: "https://i.ibb.co/0CxhpnP/Screenshot-2024-07-02-at-9-59-08-AM.png",
          }}
          style={{ width: 150, height: 40, marginTop: 0 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#F9A578",
          width: "150%",
          height: "7%",
          paddingLeft: 55,
          paddingRight: 55,
        }}
      >
        <Text style={{ color: "white", fontSize: "15" }}>
          Good Morning, Ula L.
        </Text>
        <Text style={{ color: "white", fontSize: 15 }}>
          Salt Lake City 84111
        </Text>
      </View>
      <View style={{ gap: 25, paddingRight: 20, paddingLeft: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            gap: 10,
          }}
        >
          <TextInput
            style={{
              color: "gray",
              fontSize: 15,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 20,
              height: "95%",
              width: "75%",
              textAlign: "left",
              textAlignVertical: "center",
              padding: 0,
              paddingLeft: 20,
            }}
            placeholder="Search food"
            placeholderTextColor="gray"
            editable={false}
          />
          <Image
            source={{
              uri: "https://i.ibb.co/fvC3cFQ/Screenshot-2024-07-02-at-10-15-14-AM.png",
            }}
            style={{ width: 90, height: 45 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
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
                uri: "https://i.ibb.co/sFT9cq8/Screenshot-2024-07-02-at-10-14-48-AM.png",
              }}
              style={{ width: 85, height: 85 }}
            ></Image>
            <Text style={{ fontWeight: "bold" }}>American</Text>
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
                uri: "https://i.ibb.co/1vXGbWp/Screenshot-2024-07-02-at-10-14-57-AM.png",
              }}
              style={{ width: 85, height: 85 }}
            ></Image>
            <Text style={{ fontWeight: "bold" }}>Asian</Text>
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
                uri: "https://i.ibb.co/4g90wqk/Screenshot-2024-07-02-at-10-15-02-AM.png",
              }}
              style={{ width: 85, height: 85 }}
            ></Image>
            <Text style={{ fontWeight: "bold" }}>Italian</Text>
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
                uri: "https://i.ibb.co/HtXGPhS/Screenshot-2024-07-02-at-10-15-07-AM.png",
              }}
              style={{ width: 85, height: 85 }}
            ></Image>
            <Text style={{ fontWeight: "bold" }}>Indian</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "black", fontSize: "20" }}>Available Now</Text>
          <Text
            style={{ fontWeight: "bold", color: "#FC7326", fontSize: "14" }}
          >
            View All
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <ImageBackground
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy142nhzm490EEmiq2ss5EEnFKiSOCsnPZNw&s",
          }}
        > */}
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <Image
              source={{
                uri: "https://i.ibb.co/16TqsPP/Screenshot-2024-07-02-at-10-27-08-AM.png",
              }}
              style={{ width: 280, height: 220 }}
            />
            {/* <Text>heart</Text>
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
            </View> */}
          </View>
          {/* </ImageBackground> */}
          {/* <Text>17774 N University Ave, Provo...</Text>
        <Text>Time Left to Order: 8 hours 29 min</Text>
        <Text>37 miles</Text> */}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "black", fontSize: "20" }}>
            Favorite Restaraunts
          </Text>
          <Text
            style={{ fontWeight: "bold", color: "#FC7326", fontSize: "14" }}
          >
            View All
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "black", fontSize: "20" }}>Most Popular</Text>
          <Text
            style={{ fontWeight: "bold", color: "#FC7326", fontSize: "14" }}
          >
            View All
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
