import { ScrollView, SafeAreaView, StyleSheet, View } from "react-native";
import HorizontalMovieList from "../../../components/ui/HorizontalMovieList";
import DaysMovie from "../../../components/movies/DaysMovie";
import { StatusBar } from "expo-status-bar";

const Page = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <DaysMovie />
        <HorizontalMovieList
          title={"A regarder pendant de très longue heures"}
        />

        <HorizontalMovieList title={"Notre selection du jour pour vous"} />

        <HorizontalMovieList title={"Nouveautés sur Netflix"} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default Page;
