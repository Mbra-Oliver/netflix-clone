import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { CONFIG_COLORS } from "../../utils/constantes";

const LoadingIndicator = ({ title }: { title: string }) => {
  return (
    <View style={styles.root}>
      <ActivityIndicator />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: CONFIG_COLORS.dark,
  },

  text: {
    color: "white",
  },
});

export default LoadingIndicator;
