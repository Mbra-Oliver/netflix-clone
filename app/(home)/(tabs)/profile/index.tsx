import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ProfileLinkNavigation from "../../../../components/ui/ProfileLinkNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import HorizontalDowloadedList from "../../../../components/ui/HorizontalDownloadedList";
import HorizontalMovieList from "../../../../components/ui/HorizontalMovieList";
import ProfileData from "../../../../components/user-profile/profilData";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const Page = () => {
  const goDownloads = () => {
    router.navigate("/(home)/Downloads");
  };

  const goNotifications = () => {
    router.navigate("/(home)/Notifications");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#000", flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Mon NetFlix
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity>
              <Feather name="search" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="menu" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <ProfileData />
        <ProfileLinkNavigation
          backgroundColor="red"
          icon="bell"
          title={"Notification"}
          onPress={goNotifications}
        />
        <ProfileLinkNavigation
          icon="bell"
          backgroundColor="blue"
          title={"Téléchargements"}
          onPress={goDownloads}
        />

        <HorizontalDowloadedList haveTitle={false} />

        <HorizontalMovieList title={"Ma liste"} />

        <HorizontalDowloadedList haveTitle title="Vu récemment" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
