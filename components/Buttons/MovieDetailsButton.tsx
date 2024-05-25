import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface Props {
  background: string;
  color: string;
  title: string;
  icon: any;
  iconColor: string;
  action: () => void;
}

const MovieDetailsButton = ({
  background,
  color,
  title,
  icon,
  iconColor,
  action,
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
        borderRadius: 2,
      }}
      onPress={action}
    >
      <MaterialCommunityIcons name={icon} size={30} color={iconColor} />
      <Text style={{ color: color, fontSize: 20 }}>{title}</Text>
    </Pressable>
  );
};

export default MovieDetailsButton;
