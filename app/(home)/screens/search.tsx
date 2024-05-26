import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import SearchInput from "../../../components/ui/SearchInput";
const search = () => {
  const isPresented = router.canGoBack();

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#000" }}>
      <SearchInput />
      {isPresented && <Link href="../">Fermer</Link>}
      <StatusBar style="dark" />
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});
