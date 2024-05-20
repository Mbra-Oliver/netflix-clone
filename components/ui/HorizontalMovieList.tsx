import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import MovieItem from "./MovieItem";
import { useEffect, useState } from "react";
import axios from "./../../request/axios";
import appRequest, { TOKEN } from "../../request/appRequest";
import fetchApiRequest from "./../../request/axios";

const HorizontalMovieList = ({
  title,
  endPointUrl,
}: {
  title: String;
  endPointUrl?: any;
}) => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const resData = await fetchApiRequest(endPointUrl);
        setMovies(resData.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    if (endPointUrl) {
      fetchMovies();
    }
  }, [endPointUrl]);

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
        keyExtractor={(item) => item.id}
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
