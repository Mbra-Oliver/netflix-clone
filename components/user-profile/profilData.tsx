import { Alert, Image, Pressable, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const ProfileData = () => {
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 10,
        }}
      >
        <Image
          source={require("./../../assets/day_movie.jpeg")}
          style={{
            overflow: "hidden",
            width: 50,
            height: 50,
            borderRadius: 100,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          paddingBottom: 30,
        }}
      >
        <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
          Mbra Oliver
        </Text>

        <Pressable onPress={() => Alert.alert("Open setting drawer")}>
          <SimpleLineIcons name="arrow-down" size={16} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileData;
