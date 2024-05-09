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
interface Props {
  background?: string;
  massDeleteMode: boolean;
  title: string;
  leftIcon: any;
  onPress: () => void;
}

const FixedTitleTheme = ({
  background = "#000",
  massDeleteMode,
  leftIcon,
  title,
  onPress,
}: Props) => {
  return (
    massDeleteMode && (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 25,
          padding: 10,
          backgroundColor: background,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <MaterialIcons name={leftIcon} size={22} color="white" />
        </Pressable>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
          {title}
        </Text>
      </View>
    )
  );
};

export default FixedTitleTheme;
