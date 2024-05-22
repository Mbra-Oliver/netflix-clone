import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";

const LoadingIndicator = ({ title }: { title: string }) => {
  return (
    <View style={styles.loadingIndicator}>
      <ActivityIndicator />
      <Text style={{ color: "white" }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default LoadingIndicator;
