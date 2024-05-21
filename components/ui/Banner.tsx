import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import fetchApiRequest from "../../api/request";

const Banner = ({ endPointUrl }: { endPointUrl: string }) => {
  const [movie, setMovie] = useState<any>();

  useEffect(() => {
    async function fetchBanner() {
      try {
        const resData = await fetchApiRequest(endPointUrl);
        setMovie(
          resData.results[
            Math.floor(Math.random() * resData.results.length - 1)
          ]
        );
      } catch (error) {
        console.log(`Erreur banner ${error}`);
      }
    }

    fetchBanner();
  }, [endPointUrl]);

  return (
    <View style={styles.root}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`,
        }}
        style={styles.banner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 350,
  },
  banner: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default Banner;
