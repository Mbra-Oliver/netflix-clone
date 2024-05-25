import {
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { useLocalSearchParams } from "expo-router";
import MovieDetailsHeader from "../../../../components/MovieDetailsHeader";
import MovieDetailsData from "../../../../components/MovieDetailsData";
import { generateMovieDetailsUrl } from "../../../../api/appRequest";
import fetchApiRequest from "../../../../api/request";
import { IMovie } from "../../../../interfaces/IMovie";
import LoadingIndicator from "../../../../components/ui/LoadingIndicator";

const Page = () => {
  const params = useLocalSearchParams();
  const movieId = params.id;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<IMovie>();

  let endPointUrl: string | null = null;

  if (movieId && typeof movieId === "string") {
    endPointUrl = generateMovieDetailsUrl(movieId);
  }

  console.log(movieId);

  useEffect(() => {
    async function fetchMovie() {
      if (endPointUrl) {
        setIsLoading(true);

        try {
          const resData = await fetchApiRequest(endPointUrl);
          setMovie(resData);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          Alert.alert("Erreur de récupération de vos films...");
        }
      }
    }

    fetchMovie();
  }, [endPointUrl, movieId]);

  console.log(movie);

  if (isLoading) {
    return <LoadingIndicator title="Récupération du film..." />;
  }

  const moviePictureUrl = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;

  return (
    <View style={styles.root}>
      <MovieDetailsHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 150 }}>
          <ImageBackground
            source={{
              uri: moviePictureUrl,
            }}
            style={styles.image}
          />
        </View>

        {movie && <MovieDetailsData movie={movie!} />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default Page;
