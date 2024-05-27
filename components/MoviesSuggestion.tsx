import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import LoadingIndicator from "./ui/LoadingIndicator";
import fetchApiRequest from "../api/request";
import { IMovie } from "../interfaces/IMovie";
import VerticalMovieItem from "./VerticalMovieItem";
import appMovieRequest from "../api/appRequest";

interface Props {
  title: string;
  endPointUrl: string;
}

const MoviesSuggestion = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Array<IMovie>>([]);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);

      try {
        const resData = await fetchApiRequest(appMovieRequest.upcomingMovies);
        setMovies(resData.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        Alert.alert("Erreur de récupération de vos films...");
      }
    }

    fetchMovies();
  }, []);

  if (isLoading) {
    return <LoadingIndicator title="Récupération des suggestions..." />;
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Séries et films suggérés</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <VerticalMovieItem movie={item} />;
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
  },
});

export default MoviesSuggestion;
