import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";
const NavBar = () => {
  const handleSearch = () => {
    Alert.alert("Aller vers la recherche....");
  };

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../../assets/logo_netflix.png")}
          style={styles.image}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "/screens/search",
          });
        }}
      >
        <Feather name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  imageContainer: {
    width: 100,
    height: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export default NavBar;
