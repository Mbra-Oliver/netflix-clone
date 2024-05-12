import { StyleSheet, ImageBackground, View, Text } from "react-native";

interface Props {
  movie: {
    id: number;
    title: string;
    serie: boolean;
    totalEpisode?: number;
    size: string;
  };
}

const DownloadMovieItem = ({ movie }: Props) => {
  return (
    <View
      style={{
        backgroundColor: "#161616",
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <View style={styles.movieContainer}>
        <ImageBackground
          source={require("./../../assets/default.jpeg")}
          style={styles.imageBackground}
        />
      </View>
      <View
        style={{ padding: 20, justifyContent: "center", alignItems: "center" }}
      >
        <Text
          style={{
            color: "white",
            width: 200,
            fontSize: 14,
          }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {movie.serie &&
            movie.totalEpisode + " Episodes |" + movie.size + "Go"}

          {!movie.serie && movie.title + " | " + movie.size + "Go"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    width: 240,
    marginHorizontal: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: 120, // Adjust height as needed
    justifyContent: "center", // To center the text vertically
    alignItems: "center", // To center the text horizontally
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  movieTitle: {
    fontSize: 16,
    color: "white",
  },
});
export default DownloadMovieItem;
