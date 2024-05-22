import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";

interface Props {
  movie: any;
}

const MovieItem = ({ movie }: Props) => {
  const moviePicture = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const goDetails = () => {
    console.log("aller au details :" + movie.original_title);
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
  },
});

export default MovieItem;
