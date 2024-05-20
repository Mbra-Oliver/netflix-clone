import {
  ScrollView,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import HorizontalMovieList from "../../../components/ui/HorizontalMovieList";
import DaysMovie from "../../../components/movies/DaysMovie";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import appRequest from "../../../request/appRequest";
import { useState } from "react";

const Page = () => {
  const [currentColor, setCurrentColor] = useState("");

  // Fonction de gestion du changement de couleur reçue du composant enfant
  const handleColorChange = (color: any) => {
    setCurrentColor(color);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: 100, height: 50 }}>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            source={require("./../../../assets/logo.png")}
          />
        </View>

        <TouchableOpacity>
          <Feather name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <DaysMovie
          endPointUrl={appRequest.fetchPopular}
          onColorChange={handleColorChange}
        />
        <HorizontalMovieList
          title={"Les plus populaires"}
          endPointUrl={appRequest.fetchPopular}
        />

        <HorizontalMovieList
          title={"Bientôt disponible"}
          endPointUrl={appRequest.fetchUpcoming}
        />

        {/* <HorizontalMovieList title={"Nouveautés sur Netflix"} />
         */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default Page;
