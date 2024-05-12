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

const Page = () => {
  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={["rgba(165,42,42,0.3)", "rgba(0,0,0,0.1)"]}
        start={{ x: 0, y: 0.9 }}
        end={{ x: 0, y: 1 }}
      ></LinearGradient> */}
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
        <DaysMovie />
        <HorizontalMovieList
          title={"A regarder pendant de très longue heures"}
        />

        <HorizontalMovieList title={"Notre selection du jour pour vous"} />

        <HorizontalMovieList title={"Nouveautés sur Netflix"} />
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
