import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import fetchApiRequest from "../api/request";
import MovieItem from "./MovieItem";

interface Props {
  title: string;
  endPointUrl: string;
}

const MoviesList = ({ title, endPointUrl }: Props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const resData = await fetchApiRequest(endPointUrl);

        setMovies(resData.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, [endPointUrl]);

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator />
        <Text style={{ color: "white" }}>Recuperation des films</Text>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={movies}
        renderItem={({ item }: { item: any }) => {
          return <MovieItem movie={item} />;
        }}
        keyExtractor={(item) => item.id}
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

  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default MoviesList;
