import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React from "react";

const MovieDetailsHeader = () => {
  return (
    <View style={styles.root}>
      <Pressable onPress={() => router.navigate("/(home)")}>
        <MaterialIcons name="arrow-back" size={30} color="white" />
      </Pressable>

      <Pressable
        onPress={() => {
          router.push({
            pathname: "/screens/search",
          });
        }}
      >
        <MaterialIcons name="search" size={30} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
});

export default MovieDetailsHeader;
