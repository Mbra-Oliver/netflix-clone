import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HorizontalMovieList from "../components/ui/HorizontalMovieList";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HorizontalMovieList
          title={"A regarder pendant de très longue heures"}
        />

        <HorizontalMovieList title={"Notre selection du jour pour vous"} />

        <HorizontalMovieList title={"Nouveautés sur Netflix"} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
