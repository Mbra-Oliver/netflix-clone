import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import LoadingIndicator from "./ui/LoadingIndicator";
import fetchApiRequest from "../api/request";
import MovieItem from "./MovieItem";

interface Props {
  title: string;
  endPointUrl: string;
}

const MoviesList = ({ title, endPointUrl }: Props) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);

      try {
        const resData = await fetchApiRequest(endPointUrl);
        setLoading(false);
        console.log(resData);
        setMovies(resData.results);
      } catch (error) {
        setLoading(false);
        Alert.alert(
          "Une erreur est survenue lors de la recuperation de vos films"
        );
      }
    }

    fetchMovies();
  }, [endPointUrl]);

  if (loading) {
    return <LoadingIndicator title="Recuperation des films..." />;
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: any }) => {
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
