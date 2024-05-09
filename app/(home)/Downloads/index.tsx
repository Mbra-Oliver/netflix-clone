import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import FixedTitleTheme from "../../../components/ui/FixedTitleItem";
import VerticalDowloadList from "../../../components/ui/VerticalDownnloadList";

const Page = () => {
  const [massDeleteMode, setMassDeleteMode] = useState(false);

  const toggleMassDelete = () => {
    setMassDeleteMode((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fixed}>
        <FixedTitleTheme
          massDeleteMode
          leftIcon={massDeleteMode ? "close" : "arrow-back"}
          background={massDeleteMode ? "green" : "#000"}
          title={
            massDeleteMode
              ? "Sélectionnez pour supprimer"
              : "Mes téléchargements"
          }
          onPress={() => toggleMassDelete}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Pressable onPress={() => router.back()}>
              <MaterialIcons name="settings" size={22} color="white" />
            </Pressable>
            <Text style={{ color: "white" }}>Téléchargements automatique</Text>
          </View>
          <Pressable onPress={toggleMassDelete}>
            <MaterialIcons name="edit" size={22} color="white" />
          </Pressable>
        </View>
      </View>

      <View style={[styles.content, { marginTop: 50 }]}>
        <View>
          <View style={{ backgroundColor: "red", flex: 1 }}>
            <Text>Lorem</Text>
          </View>
        </View>

        <VerticalDowloadList title="NetFlix User" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    flex: 1,
    paddingTop: 50,
  },
});

export default Page;
