import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { IMovie } from "../interfaces/IMovie";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const VerticalMovieItem = ({ movie }: { movie: IMovie }) => {
  const moviePictureUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={styles.root}>
      <View style={styles.flexRow}>
        <View style={styles.movieContainer}>
          <ImageBackground
            source={{
              uri: moviePictureUrl,
            }}
            style={styles.imageBackground}
          />
        </View>

        <View style={{ gap: 15 }}>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              flexWrap: "wrap",
              width: 130,
              fontWeight: "bold",
            }}
            numberOfLines={2}
          >
            {movie.title}
          </Text>
        </View>
      </View>
      <Pressable style={styles.borderedBtn}>
        <MaterialCommunityIcons name="play" size={25} color="white" />
      </Pressable>
    </View>
  );
};

export default VerticalMovieItem;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "space-between",
  },

  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  movieContainer: {
    width: 150,
    borderWidth: 1,
    borderRadius: 4,
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  movieTitle: {
    fontSize: 16,
    color: "white",
  },

  borderedBtn: {
    borderRadius: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
