import { View, Text, StyleSheet, Alert, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import fetchApiRequest from "../../api/request";

const Banner = ({ endPointUrl }: { endPointUrl: string }) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<any>();

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const resData = await fetchApiRequest(endPointUrl);
        const randomIndex = Math.floor(Math.random() * resData.results.length);
        setMovie(resData.results[randomIndex]);
        setLoading(false);
      } catch (error) {
        Alert.alert("echec de recuperation de banière");
        setLoading(false);
      }
    }

    fetchMovie();
  }, [endPointUrl]);

  if (loading) {
    return <LoadingIndicator title="Recuperation de la baniere..." />;
  }

  if (!movie) {
    return;
  }

  return (
    <View style={styles.root}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 300,
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
