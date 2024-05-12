import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
  Text,
} from "react-native";
import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoPlayerBox() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // État pour suivre le chargement de la vidéo
  const videoRef = useRef<Video>(null);

  const cleanupRef = useRef(false);
  useEffect(() => {
    const setupVideo = async () => {
      if (videoRef.current) {
        // Lecture automatique au chargement
        await videoRef.current.loadAsync({ uri: videoSource }, {}, false);
        await videoRef.current.playAsync();
        setIsLoading(false); // Met à jour l'état lorsque le chargement est terminé
        // Passage en mode plein écran
        await videoRef.current.presentFullscreenPlayer();
      }
    };

    setupVideo();

    return () => {
      cleanupRef.current = true;
      if (videoRef.current && !cleanupRef.current) {
        videoRef.current.unloadAsync();
      }
    };
  }, []);

  const handleExitFullScreen = async () => {
    if (videoRef.current) {
      await videoRef.current.dismissFullscreenPlayer();
    }

    router.push({
      pathname: "Player/[movieId]",
      params: { movieId: 4 },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        {isLoading ? ( // Affiche l'indicateur si la vidéo est en cours de chargement
          <View>
            <ActivityIndicator size="large" color="#0000ff" />

            <Text>Chargement de votre film....</Text>
          </View>
        ) : (
          <Video
            ref={videoRef}
            style={styles.video}
            shouldPlay={isPlaying}
            isLooping
            useNativeControls={true}
            resizeMode={ResizeMode.CONTAIN}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={isLoading ? "Annuler" : "Fermer"}
          onPress={handleExitFullScreen}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  videoContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
});
