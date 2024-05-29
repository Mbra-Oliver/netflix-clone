import { StyleSheet, Text, View } from "react-native";
import React from "react";

const productionYear = (dateString: string) => {
  const date = new Date(dateString);

  return date.getFullYear();
};

const MovieDetailsData = ({ movie }: { movie: any }) => {
  console.log(movie.genres);
  return (
    <View style={styles.root}>
      <View>
        <Text style={[styles.whiteText, styles.title]}>
          {movie.original_title}
        </Text>
      </View>

      <View style={styles.releaseDate}>
        <Text style={[styles.whiteText]}>
          {productionYear(movie.release_date)}
        </Text>

        {movie.adult && (
          <Text style={[styles.whiteText, styles.isAdult]}>+18</Text>
        )}
      </View>

      {/* Bouton de like du film */}

      <View>
        <Text numberOfLines={10} style={styles.whiteText}>
          {movie.overview}
        </Text>

        <View style={styles.genderContainer}>
          <Text style={styles.whiteText}>Genre:</Text>

          <View style={styles.genderRow}>
            {movie.genres.map((item: any) => (
              <Text style={styles.lightGray} key={item.id}>
                {item.name}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.genderContainer}>
          <Text style={styles.whiteText}>Production:</Text>

          <View style={[styles.productionRow]}>
            <Text numberOfLines={3}>
              {movie.production_companies.map((item: any) => (
                <Text style={styles.lightGray} key={item.id} numberOfLines={3}>
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

export default MovieDetailsData;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 15,
    marginTop: 10,
  },

  whiteText: {
    color: "white",
  },

  lightGray: {
    color: "#7e7e7e",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  releaseDate: { flexDirection: "row", gap: 10, alignItems: "center" },
  isAdult: {
    backgroundColor: "gray",
    padding: 3,
    borderRadius: 3,
    overflow: "hidden",
  },

  genderContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
  },

  genderRow: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },

  productionRow: {
    width: "100%",

    flexDirection: "row",
  },
});
