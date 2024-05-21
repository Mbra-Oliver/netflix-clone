import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Alert,
} from "react-native";
import React from "react";

const MovieItem = ({ movie }: { movie: any }) => {
  const moviePicture = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const goDetails = () => {
    Alert.alert(movie.original_title);
  };

  return (
    <Pressable style={styles.root} onPress={goDetails}>
      <ImageBackground
        source={{
          uri: moviePicture,
        }}
        style={styles.image}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 110,
    marginHorizontal: 5,
    overflow: "hidden",
    borderRadius: 10,
  },

  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
});
export default MovieItem;
