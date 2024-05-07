import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import MovieItem from "./MovieItem";

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

const HorizontalMovieList = ({ title }: { title: String }) => {
  return (
    <View style={styles.root}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          color: "white",
          marginBottom: 10,
        }}
      >
        {title}
      </Text>
      <FlatList
        horizontal
        data={movies}
        renderItem={({ item }) => {
          return <MovieItem movie={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false} // Pour masquer la barre de défilement horizontale
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 20,
  },
});

export default HorizontalMovieList;
