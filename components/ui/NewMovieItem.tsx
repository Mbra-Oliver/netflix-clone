import { View, Text, Image, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
const NewMovieItem = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ width: "20%", flex: 1 }}>
        <Text style={{ color: "white" }}>Juin</Text>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "900" }}>
          05
        </Text>
      </View>
      <View style={{ width: "80%" }}>
        <View style={{ width: "100%", height: 150, overflow: "hidden" }}>
          <Image
            source={require("./../../assets/default.jpeg")}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 6,
              objectFit: "cover",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text
            numberOfLines={3}
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              width: "40%",
            }}
          >
            Designated Survivor
          </Text>
          <Pressable
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Feather name="bell" size={20} color="white" />
            <Text style={{ color: "gray" }}>Me le rappeler</Text>
          </Pressable>

          <Pressable
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Feather name="info" size={20} color="white" />
            <Text style={{ color: "gray" }}>Info</Text>
          </Pressable>
        </View>

        <View>
          <Text
            style={{
              color: "white",
              marginTop: 30,
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Disponible le 5 juin
          </Text>

          <Text
            numberOfLines={4}
            style={{ color: "white", marginTop: 10, fontSize: 15 }}
          >
            "Dexter" est une série télévisée américaine qui suit Dexter Morgan,
            un expert médico-légal spécialisé dans l'analyse de traces de sang
            pour la police de Miami. Cependant, Dexter a un côté sombre : il est
            également un tueur en série qui cible d'autres criminels, suivant un
            code de conduite strict enseigné par son père adoptif. Le code de
            Dexter exige qu'il ne s'attaque qu'à des meurtriers qui ont échappé
            à la justice, garantissant ainsi qu'il ne cible que des personnes
            coupables. Au fil des saisons, Dexter jongle avec sa double vie,
            naviguant entre son travail au sein de la police et ses activités
            nocturnes de justicier. La série explore les thèmes de la moralité,
            de l'identité et de la rédemption, tout en présentant un personnage
            complexe et ambigu. Chaque saison de "Dexter" présente une intrigue
            principale ainsi que des arcs narratifs secondaires, avec plusieurs
            personnages récurrents et antagonistes. La série a été acclamée pour
            son écriture intelligente, ses performances d'acteurs convaincantes
            et sa capacité à défier les attentes du public. "Dexter" a été
            diffusé de 2006 à 2013, totalisant huit saisons. En 2021, une
            nouvelle saison intitulée "Dexter: New Blood" a été diffusée,
            reprenant l'histoire du personnage principal après les événements de
            la saison finale de la série originale.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NewMovieItem;
