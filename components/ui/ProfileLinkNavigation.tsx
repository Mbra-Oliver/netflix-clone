import {
  ColorValue,
  PressableProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

interface Props {
  backgroundColor: ColorValue;
  icon: any;
  title: String;
  onPress: () => void;
}

const ProfileLinkNavigation = ({
  backgroundColor,
  icon,
  title,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <View
          style={{
            backgroundColor: backgroundColor,
            padding: 10,
            borderRadius: 100,
          }}
        >
          <FontAwesome name={icon} size={24} color="white" />
        </View>
        <Text style={{ color: "white" }}>{title}</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={35} color="white" />
    </TouchableOpacity>
  );
};

export default ProfileLinkNavigation;
