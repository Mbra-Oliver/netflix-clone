import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import fetchApiRequest from "../../request/axios";

// Générer une couleur RGBA aléatoire
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random();
  return `rgba(${r},${g},${b},${a})`;
};
const DaysMovie = ({
  endPointUrl,
  onColorChange,
}: {
  endPointUrl: string;
  onColorChange: any;
}) => {
  const [movie, setMovie] = useState<any>();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const resData = await fetchApiRequest(endPointUrl);
        setMovie(
          resData.results[
            Math.floor(Math.random() * resData.results.length - 1)
          ]
        );
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    if (endPointUrl) {
      fetchMovie();
    }

    handleChangeColor();
  }, [endPointUrl]);

  const [color, setColor] = useState(generateRandomColor());

  const handleChangeColor = () => {
    const newColor = generateRandomColor();
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <LinearGradient
      colors={["rgba(255, 165, 0, 0.3)", "rgba(0, 0, 0, 0.9)"]}
      start={{ x: 0, y: 0.9 }}
      end={{ x: 0, y: 1 }}
      style={[styles.gradient, styles.root]}
    >
      <ImageBackground
        style={styles.inner}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`,
        }}
      >
        <LinearGradient
          colors={["rgba(255, 165, 0, 0.3)", "rgba(0, 0, 0, 0.9)"]}
          start={{ x: 0, y: 0.9 }}
          end={{ x: 0, y: 1 }}
          style={[StyleSheet.absoluteFill, styles.gradient]}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <View
              style={{
                paddingBottom: 20,
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 5,
              }}
            >
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Text style={{ color: "white" }}>Inquiétant</Text>
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: "red",
                    borderRadius: 100,
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Text style={{ color: "white" }}>Inquiétant</Text>
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: "red",
                    borderRadius: 100,
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Text style={{ color: "white" }}>Inquiétant</Text>
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: "red",
                    borderRadius: 100,
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Text style={{ color: "white" }}>Inquiétant</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Pressable style={styles.coverPlayBtn}>
              <Feather name="play" size={24} color="black" />
              <Text>Jouer</Text>
            </Pressable>

            <Pressable style={styles.coverPlayBtnOutline}>
              <Feather name="plus" size={24} color="white" />
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Ma liste
              </Text>
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
    borderRadius: 2,
    width: "50%",
  },
  coverPlayBtnOutline: {
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 2,
    width: "50%",
  },
});
export default DaysMovie;
