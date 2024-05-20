import { router } from "expo-router";
import { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import fetchApiRequest from "../../request/axios";

const MovieItem = ({ movie }: { movie: any }) => {
  //https://api.themoviedb.org/3/movie/movie_id/images
  const pictureLink = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const onPressMovie = () => {
    router.navigate("/(home)/Player/3");
  };

  return (
    <TouchableOpacity onPress={onPressMovie} style={styles.movieContainer}>
      <ImageBackground
        source={{
          uri: pictureLink,
        }}
        style={styles.imageBackground}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    width: 110,
    marginHorizontal: 2,
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden", //s'assurer que les bords arrondis sont visible
  },
  imageBackground: {
    width: "100%",
    height: 200, // Adjust height as needed
    justifyContent: "center", // To center the text vertically
    alignItems: "center", // To center the text horizontally
    borderRadius: 8,
  },
  movieTitle: {
    fontSize: 16,
    color: "white",
  },
});

export default MovieItem;
