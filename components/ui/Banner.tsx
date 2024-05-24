import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import fetchApiRequest from "../../api/request";
import LoadingIndicator from "./LoadingIndicator";

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
      />
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
});

export default Banner;
