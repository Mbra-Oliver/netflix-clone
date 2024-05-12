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

import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { TabNavigationState, ParamListBase } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const Page = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        tabBarIndicatorStyle: { backgroundColor: "#1c87ED", height: 2 },
      }}
    >
      <MaterialTopTabs.Screen name="[movieId]" options={{ title: "Détails" }} />
      <MaterialTopTabs.Screen
        name="recommandation"
        options={{ title: "Recommandation" }}
      />
    </MaterialTopTabs>
  );
  {
    /*<View style={styles.root}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </Pressable>

        <Pressable onPress={() => {}}>
          <MaterialIcons name="search" size={24} color="white" />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <VideoPreviewPlayer />
        </View>
        <View style={{ paddingVertical: 15 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
            DESIGNATED SURVIVOR
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            gap: 10,
          }}
        >
          <Text style={{ color: "white" }}>2018</Text>

          <Text
            style={{
              color: "white",
              backgroundColor: "gray",
              padding: 0.8,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            18+
          </Text>

          <Text style={{ color: "white" }}>3 Saisons</Text>
        </View>

        <View style={{ gap: 10 }}>
          <MovieDetailsButton
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
          />
        </View>

        <View style={{ paddingVertical: 20 }}>
          <Text style={{ color: "white", fontSize: 16 }}>
            Brillant expert scientifique du service médico-légal de la police de
            Miami, Dexter Morgan est spécialisé dans l'analyse de prélèvements
            sanguins. Mais voilà, Dexter cache un terrible secret : il est
            également tueur en série. Un serial killer pas comme les autres,
            avec sa propre vision de la justice.
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: "white" }}>Avec:</Text>
            <Text style={{ color: "#7e7e7e" }} numberOfLines={2}>
              Dexter Morgan, Allisa, Gwen Stacie, Marisa Léa
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingVertical: 2,
            }}
          >
            <Text style={{ color: "white" }}>Créateur:</Text>
            <Text style={{ color: "#7e7e7e" }} numberOfLines={2}>
              Dexter Morgan
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 30,
            }}
          >
            <MovieDetailsActionBtn icon="plus" />
            <MovieDetailsActionBtn icon="like2" />
            <MovieDetailsActionBtn icon="sharealt" />
            <MovieDetailsActionBtn icon="download" />
          </View>
        </View>
      </ScrollView>
        </View>*/
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
  },
});
export default Page;
