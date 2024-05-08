import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HorizontalMovieList from "../components/ui/HorizontalMovieList";
import { Redirect } from "expo-router";

export default function Page() {
  return <Redirect href={"/(home)/(tabs)"} />;
}
