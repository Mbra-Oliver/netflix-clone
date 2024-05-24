import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import NavBar from "../../../components/ui/NavBar";
import { CONFIG_COLORS } from "../../../utils/constantes";
import Banner from "../../../components/ui/Banner";
import MoviesList from "../../../components/MoviesList";
import appMovieRequest from "../../../api/appRequest";
import BlurViewData from "../../../components/BlurViewData";

const Page = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NavBar />

      <ScrollView
        contentContainerStyle={{ gap: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <Banner endPointUrl={appMovieRequest.fetchPopularMovies} />

        <MoviesList
          endPointUrl={appMovieRequest.fetchPopularMovies}
          title="Les plus populaires"
        />

        <MoviesList
          endPointUrl={appMovieRequest.upcomingMovies}
          title="Bientôt disponible"
        />

        <MoviesList
          endPointUrl={appMovieRequest.nowPlayingMovies}
          title="Liste de lecture"
        />

        {/* <BlurViewData /> */}
        <View style={{ paddingVertical: 2 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: CONFIG_COLORS.dark,
    flex: 1,
    gap: 10,
  },
});

export default Page;
