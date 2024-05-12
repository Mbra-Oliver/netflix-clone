import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const VerticalMovieItem = ({ movie }: { movie: any }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View style={styles.movieContainer}>
          <ImageBackground
            source={require("./../../assets/default.jpeg")}
            style={styles.imageBackground}
          />
        </View>

        <View style={{ gap: 15 }}>
          <Text style={{ color: "white", fontSize: 16 }}>{movie.title}</Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            10 Episode | 10,6 Go
          </Text>
        </View>
      </View>
      <View>
        <MaterialCommunityIcons
          name="cellphone-check"
          size={35}
          color="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    width: 150,
    borderWidth: 1,
    borderRadius: 4,
    overflow: "hidden", //s'assurer que les bords arrondis sont visible
  },
  imageBackground: {
    width: "100%",
    height: 100, // Adjust height as needed
    justifyContent: "center", // To center the text vertically
    alignItems: "center", // To center the text horizontally
    borderRadius: 4,
  },
  movieTitle: {
    fontSize: 16,
    color: "white",
  },
});

export default VerticalMovieItem;
