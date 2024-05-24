import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IMovie } from "../interfaces/IMovie";

const productionYear = (dateString: Date) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

const MovieDetailsData = ({ movie }: { movie: IMovie }) => {
  return (
    <View style={styles.root}>
      <View style={{ paddingVertical: 15 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
          {movie.title}
        </Text>
      </View>

      <View style={styles.productionDateInfo}>
        <Text style={{ color: "white" }}>
          {productionYear(movie.release_date)}
        </Text>

        {movie.adult && <Text style={styles.yearLimit}>18+</Text>}

        <Text style={{ color: "white" }}>3 Saisons</Text>
      </View>

      <View style={{ gap: 10 }}>
        {/* <MovieDetailsButton
          background="#ffffff"
          color="#262626"
          title="Reprendre"
          icon="play"
          iconColor="#262626"
        />

        <MovieDetailsButton
          background="#262626"
          color="white"
          title="Télécharger"
          icon="download"
          iconColor="#ffffff"
        /> */}
      </View>

      <View style={{ paddingVertical: 20 }}>
        <Text style={{ color: "white", fontSize: 16 }}>{movie.overview}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingVertical: 10,
          }}
        >
          <Text style={{ color: "white" }}>Genre:</Text>

          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            {movie.genres.map((item) => (
              <Text style={{ color: "#7e7e7e" }} key={item.id}>
                {item.name}
              </Text>
            ))}
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingVertical: 2,
            paddingHorizontal: 5,
            width: "100%",
          }}
        >
          <Text style={{ color: "white" }}>Production:</Text>

          <View style={{ flex: 1 }}>
            <Text numberOfLines={3}>
              {movie.production_companies.map((item) => (
                <Text
                  style={{ color: "#7e7e7e" }}
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
