import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
const BlurViewData = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: "https://example.com/your-image.jpg" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
  background: {
    flex: 1,
    flexWrap: "wrap",
  },
  box: {
    width: "25%",
    height: "20%",
  },
  boxEven: {
    backgroundColor: "orangered",
  },
  boxOdd: {
    backgroundColor: "gold",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },

  image: {
    width: "100%",
    height: 300, // Adjust height as per your requirement
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default BlurViewData;
