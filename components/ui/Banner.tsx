import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <View style={styles.root}>
      <Text>Banner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 350,
    backgroundColor: "red",
  },
});

export default Banner;
