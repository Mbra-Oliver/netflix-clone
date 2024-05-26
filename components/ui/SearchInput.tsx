import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // Exécutez ici votre logique de recherche avec searchTerm
      console.log("Recherche pour :", searchTerm);
    }, 1000); // délai de 1000 ms (1 seconde)

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 5,
        backgroundColor: "gray",
      }}
    >
      <Feather name="search" size={24} color="#000" />
      <TextInput
        style={{ flex: 1 }}
        placeholder="Rechercher un film ici"
        placeholderTextColor={"#000"}
        keyboardType="web-search"
        keyboardAppearance="default"
        onChangeText={handleSearchChange}
        value={searchTerm}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
