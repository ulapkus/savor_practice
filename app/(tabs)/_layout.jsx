import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import bookmark from "../../icons/bookmark.png";
import home from "../../icons/home.png";
import plus from "../../icons/plus.png";
import profile from "../../icons/profile.png";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "black",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "white",
            height: 84,
            paddingTop: 20,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="shimmereffect"
          options={{
            title: "shimmereffect",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={bookmark}
                color={color}
                name="Orders"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="skeletonscreen"
          options={{
            title: "skeletonscreen",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="maincomponent"
          options={{
            title: "Maincomponent",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={plus}
                color={color}
                name="More"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
