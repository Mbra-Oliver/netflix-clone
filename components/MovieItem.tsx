import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";

const MovieItem = ({ movie }: { movie: any }) => {
  const moviePictureUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const goDetails = () => {
    console.log("Aller sur la page de détails....");
  };
  return (
    <Pressable style={styles.root} onPress={goDetails}>
      <ImageBackground
        source={{
          uri: moviePictureUrl,
        }}
        style={styles.image}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  root: {
    width: 110,
    height: 150,
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
export default MovieItem;
