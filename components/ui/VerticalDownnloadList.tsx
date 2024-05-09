import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MovieItem from "./MovieItem";
import VerticalMovieItem from "./VerticalMovieItem";

const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "The Dark Knight" },
  { id: 3, title: "Interstellar" },
  { id: 4, title: "The Matrix" },
  { id: 5, title: "Pulp Fiction" },
  { id: 6, title: "Fight Club" },
  { id: 7, title: "The Shawshank Redemption" },
  { id: 8, title: "Forrest Gump" },
  { id: 9, title: "The Godfather" },
  { id: 10, title: "The Lord of the Rings: The Fellowship of the Ring" },
];

const VerticalDownloadList = ({ title }: { title: string }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => {
          return <VerticalMovieItem movie={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        showsVerticalScrollIndicator={false} // Utilisation de la barre de défilement verticale
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
});

export default VerticalDownloadList;
