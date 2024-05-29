import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import LoadingIndicator from "../../../../components/ui/LoadingIndicator";
import { CONFIG_COLORS } from "../../../../utils/constantes";
import fetchApiRequest from "../../../../api/request";
import MovieDetailsHeader from "../../../../components/MovieDetailsHeader";
import MovieDetailsData from "../../../../components/MovieDetailsData";

const Page = () => {
  const { id } = useLocalSearchParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<any>();

  useEffect(() => {
    const fetchovie = async () => {
      setIsLoading(true);

      try {
        const resData = await fetchApiRequest(`${id}`);
        setMovie(resData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchovie();
  }, [id]);

  if (isLoading) {
    return <LoadingIndicator title="Récupération du film en cours...." />;
  }

  if (!movie) {
    return;
  }

  const moviePictureUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={styles.root}>
      <MovieDetailsHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.coverContainer}>
          <ImageBackground
            source={{
              uri: moviePictureUrl,
            }}
            style={styles.cover}
          />
        </View>
        <MovieDetailsData movie={movie} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: CONFIG_COLORS.dark,
  },

  coverContainer: {
    height: 200,
  },
  cover: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default Page;
