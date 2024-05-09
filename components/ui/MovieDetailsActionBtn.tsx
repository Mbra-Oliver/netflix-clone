import { Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const MovieDetailsActionBtn = ({ icon }: { icon: any }) => {
  return (
    <Pressable
      style={{ alignItems: "center", justifyContent: "center", gap: 5 }}
    >
      <AntDesign name={icon} size={24} color="white" />

      <Text style={{ color: "white" }}>Ma liste</Text>
    </Pressable>
  );
};

export default MovieDetailsActionBtn;
