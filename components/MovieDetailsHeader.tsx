import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
const MovieDetailsHeader = () => {
  return (
    <View style={styles.root}>
      <Pressable onPress={() => router.back()}>
        <MaterialIcons name="arrow-back-ios" size={26} color="white" />
      </Pressable>

      <Pressable>
        <MaterialIcons name="search" size={26} color="white" />
      </Pressable>
    </View>
  );
};

export default MovieDetailsHeader;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
