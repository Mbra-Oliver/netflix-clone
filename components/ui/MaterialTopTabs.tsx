import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { TabNavigationState, ParamListBase } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const MaterialTopNav = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        tabBarIndicatorStyle: { backgroundColor: "#1c87ED", height: 2 },
      }}
    >
      <MaterialTopTabs.Screen name="[movieId]" options={{ title: "Détails" }} />
      <MaterialTopTabs.Screen
        name="recommandation"
        options={{ title: "Recommandation" }}
      />
    </MaterialTopTabs>
  );
};
