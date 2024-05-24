import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import LoadingIndicator from "./ui/LoadingIndicator";
import fetchApiRequest from "../api/request";
import MovieItem from "./MovieItem";
import { IMovie } from "../interfaces/IMovie";

interface Props {
  title: string;
  endPointUrl: string;
}

const MoviesList = ({ title, endPointUrl }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Array<IMovie>>([]);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);

      try {
        const resData = await fetchApiRequest(endPointUrl);
        setMovies(resData.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        Alert.alert("Erreur de récupération de vos films...");
      }
    }

    fetchMovies();
  }, [endPointUrl]);

  if (isLoading) {
    return <LoadingIndicator title="Récupération des films..." />;
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <MovieItem movie={item} />;
        }}
        showsHorizontalScrollIndicator={false}
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
    fontSize: 18,
    color: "white",
  },
});

export default MoviesList;
