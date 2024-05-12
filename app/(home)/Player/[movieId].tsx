import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import VideoPlayerBox from "../../../components/VideoPlayer/videoPlayerBox";
import MovieDetailsButton from "../../../components/ui/MovieDetailButton";
import MovieDetailsActionBtn from "../../../components/ui/MovieDetailsActionBtn";
import FixedTitleTheme from "../../../components/ui/FixedTitleItem";
import { MaterialIcons } from "@expo/vector-icons";
import VideoPreviewPlayer from "../../../components/VideoPlayer/videoPreviewPlayer";
import { router } from "expo-router";

const MoviePlayerById = () => {
  return (
    <View style={styles.root}>
      <Text style={{ color: "red" }}>Contenue de tabulation</Text>
    </View>
  );

  //return ;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default MoviePlayerById;
