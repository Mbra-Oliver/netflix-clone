import { ImageBackground, StyleSheet, Text, View } from "react-native";

const MovieItem = ({ movie }: { movie: any }) => {
  return (
    <View style={styles.movieContainer}>
      <ImageBackground
        source={require("./../../assets/default.jpg")}
        style={styles.imageBackground}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    width: 110,
    marginHorizontal: 2,
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden", //s'assurer que les bords arrondis sont visible
  },
  imageBackground: {
    width: "100%",
    height: 200, // Adjust height as needed
    justifyContent: "center", // To center the text vertically
    alignItems: "center", // To center the text horizontally
    borderRadius: 8,
  },
  movieTitle: {
    fontSize: 16,
    color: "white",
  },
});

export default MovieItem;
