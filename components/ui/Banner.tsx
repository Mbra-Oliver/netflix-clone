import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import fetchApiRequest from "../../api/request";
import LoadingIndicator from "./LoadingIndicator";
import { Entypo } from "@expo/vector-icons";

const MovieGenderItem = () => {
  return (
    <View style={styles.tagContainer}>
      <View style={styles.tag} />
      <Text style={styles.tagText}>Enigme</Text>
    </View>
  );
};

const Banner = ({ endPointUrl }: { endPointUrl: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<any>();

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);

      try {
        const resData = await fetchApiRequest(endPointUrl);
        const fetchedMoviesList = resData.results;
        const randomIndex = Math.floor(
          Math.random() * fetchedMoviesList.length
        );
        setMovie(fetchedMoviesList[randomIndex]);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [endPointUrl]);

  const onPlay = () => {
    Alert.alert("Lecture du film...");
  };

  const onAdd = () => {
    Alert.alert("Ajout sur la liste en cours...");
  };

  if (isLoading) {
    return <LoadingIndicator title="Récupération des films..." />;
  }

  if (!movie) {
    return;
  }
  const moviePictureUrl = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  return (
    <View style={styles.root}>
      <ImageBackground
        source={{
          uri: moviePictureUrl,
        }}
        style={styles.image}
        fadeDuration={100}
      >
        <View style={styles.bottomContainer}>
          <View style={styles.tagRow}>
            <MovieGenderItem />
            <MovieGenderItem />
            <MovieGenderItem />
            <MovieGenderItem />
          </View>

          <View style={styles.btnsContainer}>
            <Pressable style={[styles.btn, styles.play]} onPress={onPlay}>
              <Entypo name="controller-play" size={24} color="black" />
              <Text>Lecture</Text>
            </Pressable>

            <Pressable style={[styles.btn, styles.outline]} onPress={onAdd}>
              <Entypo name="plus" size={24} color="black" />
              <Text>Ma liste</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 350,
    overflow: "hidden",
    borderRadius: 5,
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },

  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    gap: 20,
  },

  btnsContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "center",
    gap: 20,
  },

  btn: {
    flexDirection: "row",

    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    borderRadius: 2,
  },

  play: {
    backgroundColor: "white",
  },

  outline: {
    backgroundColor: "gray",
  },

  tagRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  tagContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  tag: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    borderRadius: 30,
  },
  tagText: {
    fontWeight: "bold",
    color: "white",
  },
});

export default Banner;
