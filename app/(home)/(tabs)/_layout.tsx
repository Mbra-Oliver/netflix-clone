import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveBackgroundColor: "#000",
        tabBarActiveBackgroundColor: "#000",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
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
          title: "Mon Netflix",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="animation-play"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
