import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
  title: string;
}

const MoviesList = ({ title }: Props) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});

export default MoviesList;
