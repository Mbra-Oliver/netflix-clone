import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

const DaysMovie = () => {
  return (
    <LinearGradient
      colors={["rgba(165,42,42,0.3)", "rgba(0,0,0,0.1)"]}
      start={{ x: 0, y: 0.9 }}
      end={{ x: 0, y: 1 }}
      style={[styles.gradient, styles.root]}
    >
      <ImageBackground
        style={styles.inner}
        source={require("./../../assets/day_movie.jpeg")}
      >
        <LinearGradient
          colors={["rgba(165,42,42,0.3)", "rgba(0,0,0,0.1)"]}
          start={{ x: 0, y: 0.9 }}
          end={{ x: 0, y: 1 }}
          style={[StyleSheet.absoluteFill, styles.gradient]}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 40,
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Pressable style={styles.coverPlayBtn}>
              <Feather name="play" size={24} color="black" />
              <Text>Jouer</Text>
            </Pressable>

            <Pressable style={styles.coverPlayBtn}>
              <Feather name="play" size={24} color="black" />
              <Text>Jouer</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 350,
    width: "100%",
    padding: 5,
    flex: 1,
  },
  gradient: {
    justifyContent: "flex-end",
    padding: 10,
  },
  inner: {
    borderColor: "white",
    borderWidth: 1,
    height: "100%",
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },

  coverPlayBtn: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 5,
    width: "50%",
  },
});
export default DaysMovie;
