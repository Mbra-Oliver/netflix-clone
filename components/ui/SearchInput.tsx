import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchInput({
  searchHandler,
}: {
  searchHandler: (search: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchHandler(searchTerm);
    }, 1000); // délai de 1000 ms (1 seconde)

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <View style={styles.root}>
      <Feather name="search" size={24} color="white" />
      <TextInput
        style={{ flex: 1 }}
        placeholder="Rechercher un des jeux,film..."
        placeholderTextColor={"white"}
        keyboardType="web-search"
        keyboardAppearance="default"
        onChangeText={handleSearchChange}
        value={searchTerm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 5,
    backgroundColor: "gray",
  },
});
