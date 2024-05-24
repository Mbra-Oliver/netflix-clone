import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Page = () => {
  const params = useLocalSearchParams();
  const movieId = params.id;

  return (
    <View>
      <Text>Details de film</Text>
    </View>
  );
};

export default Page;
