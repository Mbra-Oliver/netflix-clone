import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, Pressable } from "react-native";

interface Props {
  background: string;
  color: string;
  title: string;
  icon: any;
  iconColor: string;
}

const MovieDetailsButton = ({
  background,
  color,
  title,
  icon,
  iconColor,
}: Props) => {
  return (
    <Pressable
      style={{
        backgroundColor: background,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 5,
        justifyContent: "center",
        borderRadius: 5,
      }}
    >
      <MaterialCommunityIcons name={icon} size={30} color={iconColor} />
      <Text style={{ color: color, fontSize: 20 }}>{title}</Text>
    </Pressable>
  );
};

export default MovieDetailsButton;
