import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import NewMovieItem from "../../../../components/ui/NewMovieItem";
import { useState } from "react";
interface Item {
  id: string;
  icon: ImageSourcePropType;
  title: string;
  active?: boolean;
}

const initialData = [
  {
    id: "1",
    title: "Bientot disponible",
    icon: require("./../../../../assets/popcorn.png"),
    active: true,
  },
  {
    id: "2",
    title: "Les plus regardès",
    icon: require("./../../../../assets/fire.png"),
    active: false,
  },
  {
    id: "3",
    title: "Jeux",
    icon: require("./../../../../assets/console.png"),
    active: false,
  },
];

const Page = () => {
  const [data, setData] = useState(initialData);

  const onSearch = () => {
    Alert.alert("Rechercher un film");
  };

  const onRssSearch = () => {
    Alert.alert("Rechercher un flux");
  };

  const changeActiveCat = (id: string) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });

    // Mettre à jour le tableau de données
    setData(updatedData);
  };

  const renderItem = ({ item }: { item: Item }) => (
    <Pressable
      style={{
        padding: 5,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "white",
        flexDirection: "row",
        gap: 5,
        backgroundColor: item.active ? "white" : "#000",
      }}
      onPress={() => changeActiveCat(item.id)}
    >
      <Image source={item.icon} style={{ width: 25, height: 25 }} />
      <Text style={{ color: !item.active ? "white" : "#000" }}>
        {item.title}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.root}>
      {/* Header */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 32 }}>Tout Nouveau</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          <TouchableOpacity onPress={onRssSearch}>
            <Feather name="rss" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSearch}>
            <Feather name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingBottom: 20 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          contentContainerStyle={{ gap: 10 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Fin Header */}

      <ScrollView
        contentContainerStyle={{ gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Movie Item */}
        <NewMovieItem />
        <NewMovieItem />
        <NewMovieItem />
        <NewMovieItem />
        <NewMovieItem />
        <NewMovieItem />
        <NewMovieItem />
        <NewMovieItem />
        <NewMovieItem />
        <NewMovieItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
    padding: 5,
  },
});
