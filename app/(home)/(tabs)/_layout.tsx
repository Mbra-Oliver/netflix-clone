import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, View } from "react-native";
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
            <View
              style={{
                width: 30,
                height: 30,

                padding: 3,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", borderRadius: 3 }}
                source={require("./../../../assets/default.jpeg")}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
