import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Home = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="screens/search"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default Home;
