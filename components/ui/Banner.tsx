import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import fetchApiRequest from "../../api/request";
import LoadingIndicator from "./LoadingIndicator";
import { Feather, Entypo } from "@expo/vector-icons";
import { IMovie } from "../../interfaces/IMovie";

const MovieGenderItem = () => {
  return (
    <View style={styles.genderItem}>
      <View style={styles.genderCircle} />
      <Text style={styles.genderText}>Enigme</Text>
    </View>
  );
};

const Banner = ({ endPointUrl }: { endPointUrl: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<IMovie>();

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
        fadeDuration={10}
      >
        <View style={styles.bottomBtns}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MovieGenderItem />
            <MovieGenderItem />
            <MovieGenderItem />
          </View>

          <View style={styles.btnsContainer}>
            <Pressable style={styles.coverPlayBtn}>
              <Entypo name="controller-play" size={24} color="black" />
              <Text>Jouer</Text>
            </Pressable>

            <Pressable style={styles.coverPlayBtnOutline}>
              <Feather name="plus" size={24} color="white" />
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Ma liste
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 400,
    overflow: "hidden",
    borderRadius: 5,
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  bottomBtns: {
    flex: 1,
    justifyContent: "flex-end",
    gap: 20,
    padding: 20,
  },

  btnsContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "center",
    gap: 10,
  },
  genderCircle: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    borderRadius: 30,
  },

  genderItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  genderText: {
    fontWeight: "bold",
    color: "white",
  },
  coverPlayBtn: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 2,
    width: "50%",
  },
  coverPlayBtnOutline: {
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 2,
    width: "50%",
  },
});

export default Banner;
