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
          height: "11.5%",
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
          style={{ width: 125, height: 38, marginTop: 0 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          backgroundColor: "#F9A578",
          width: "150%",
          height: "6%",
          paddingLeft: 55,
          paddingRight: 55,
        }}
      >
        <Text style={{ color: "white", fontSize: 15 }}>
          Good Morning, Ula L.
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Image
            source={{
              uri: "https://i.ibb.co/pRRzqJD/Screenshot-2024-07-02-at-11-57-06-AM.png",
            }}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ color: "white", fontSize: 15 }}>
            Salt Lake City 84111
          </Text>
        </View>
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
              backgroundColor: "white",
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
            gap: 8,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
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
              gap: 5,
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
              gap: 5,
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
              gap: 5,
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
          <Text style={{ color: "black", fontSize: 20 }}>Available Now</Text>
          <Text style={{ fontWeight: "bold", color: "#FC7326", fontSize: 14 }}>
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
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 3, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 6,
              }}
            >
              <Image
                source={{
                  uri: "https://i.ibb.co/16TqsPP/Screenshot-2024-07-02-at-10-27-08-AM.png",
                }}
                style={{ width: 280, height: 220, borderRadius: 20 }}
              />
            </View>
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
          <Text style={{ color: "black", fontSize: 20 }}>
            Favorite Restaraunts
          </Text>
          <Text style={{ fontWeight: "bold", color: "#FC7326", fontSize: 14 }}>
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
          <Text style={{ color: "black", fontSize: 20 }}>Most Popular</Text>
          <Text style={{ fontWeight: "bold", color: "#FC7326", fontSize: 14 }}>
            View All
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
