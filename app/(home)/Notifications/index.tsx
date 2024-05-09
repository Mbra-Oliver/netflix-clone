import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fixed}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Pressable onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios-new" size={18} color="white" />
          </Pressable>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Notification
          </Text>
        </View>
      </View>

      <ScrollView style={[styles.content, { marginTop: 30 }]}>
        <View>
          <View style={{ backgroundColor: "red", flex: 1 }}>
            <Text>Lorem</Text>
          </View>
        </View>
      </ScrollView>
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
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    marginTop: 50, // Espacement pour le titre fixe
  },
});

export default Notification;
