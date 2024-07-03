import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IMovie } from "../interfaces/IMovie";
import MovieDetailsButton from "./Buttons/MovieDetailsButton";

const productionYear = (dateString: Date) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

const MovieDetailsData = ({ movie }: { movie: IMovie }) => {
  const onPlay = () => {
    console.log("continuer la lecture");
  };

  const onDownload = () => {
    console.log("télécharger");
  };

  return (
    <View style={styles.root}>
      <View style={styles.pv15}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
      </View>

      <View style={styles.productionDateInfo}>
        <Text style={styles.textWhite}>
          {productionYear(movie.release_date)}
        </Text>

        {movie.adult && <Text style={styles.yearLimit}>18+</Text>}
      </View>

      <View style={{ gap: 10 }}>
        <MovieDetailsButton
          background="#ffffff"
          color="#262626"
          title="Reprendre"
          icon="play"
          iconColor="#262626"
          action={onPlay}
        />

        <MovieDetailsButton
          background="#262626"
          color="white"
          title="Télécharger"
          icon="download"
          iconColor="#ffffff"
          action={onDownload}
        />
      </View>

      <View style={styles.pv15}>
        <Text style={[styles.textWhite, styles.overviewText]}>
          {movie.overview}
        </Text>

        <View style={styles.genderProdRow}>
          <Text style={styles.textWhite}>Genre:</Text>

          <View style={styles.genderProdRowInner}>
            {movie.genres.map((item) => (
              <Text style={styles.lightGrayText} key={item.id}>
                {item.name}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.genderProdRow}>
          <Text style={styles.textWhite}>Production:</Text>

          <View style={{ flex: 1 }}>
            <Text numberOfLines={3}>
              {movie.production_companies.map((item) => (
                <Text
                  style={styles.lightGrayText}
                  key={item.id}
                  numberOfLines={3}
                >
                  {item.name}
                </Text>
              ))}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 15,
  },

  textWhite: {
    color: "white",
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  pv15: {
    paddingVertical: 15,
  },

  overviewText: {
    fontSize: 16,
  },

  genderProdRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
  },

  genderProdRowInner: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  lightGrayText: {
    color: "#7e7e7e",
  },
  productionDateInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    gap: 10,
  },

  yearLimit: {
    color: "white",
    backgroundColor: "gray",
    padding: 0.8,
    borderRadius: 3,
    overflow: "hidden",
  },
});

export default MovieDetailsData;
