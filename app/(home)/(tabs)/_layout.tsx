import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: "#000",
        tabBarActiveBackgroundColor: "#000",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="games/index"
        options={{
          title: "Jeux",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="game-controller" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="news/index"
        options={{
          title: "Tout nouveau",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="animation-play"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Mon Comnte",
          tabBarIcon: () => (
            <View
              style={{ width: 30, height: 30, padding: 3, overflow: "hidden" }}
            >
              <Image
                style={{ width: "100%", height: "100%", borderRadius: 3 }}
                source={require("./../../../assets/profile_pic.jpeg")}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
