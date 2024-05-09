import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import DownloadMovieItem from "./DownloadMovieItem";

const movies = [
  { id: 1, title: "Inception", serie: true, totalEpisode: 10, size: "10,6" },
  { id: 2, title: "The Dark Knight", serie: false, size: "10,6" },
  { id: 3, title: "Interstellar", serie: false, size: "10,6" },
  { id: 4, title: "The Matrix", serie: true, totalEpisode: 10, size: "10,6" },
  { id: 5, title: "Pulp Fiction", serie: false, size: "10,6" },
  { id: 6, title: "Fight Club", serie: false, size: "10,6" },
  { id: 7, title: "The Shawshank Redemption", serie: false, size: "10,6" },
  { id: 8, title: "Forrest Gump", serie: false, size: "10,6" },
  { id: 9, title: "The Godfather", serie: false, size: "10,6" },
  {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    serie: false,
    size: "10,6",
  },
];

interface Props {
  haveTitle: boolean;
  title?: string;
}

const HorizontalDowloadedList = ({ haveTitle, title }: Props) => {
  return (
    <View style={styles.root}>
      {haveTitle && (
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
            paddingBottom: 15,
          }}
        >
          {title}
        </Text>
      )}

      <FlatList
        horizontal
        data={movies}
        renderItem={({ item }) => {
          return <DownloadMovieItem movie={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false} // Pour masquer la barre de défilement horizontale
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 20,
  },
  separator: {
    width: 5, // Espacement horizontal entre les éléments
  },
});

export default HorizontalDowloadedList;
