import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoPlayerBox() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<Video>(null);

  const cleanupRef = useRef(false);
  useEffect(() => {
    const setupVideo = async () => {
      if (videoRef.current) {
        // Lecture automatique au chargement
        await videoRef.current.loadAsync({ uri: videoSource }, {}, false);
        await videoRef.current.playAsync();
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
        <Video
          ref={videoRef}
          style={styles.video}
          shouldPlay={isPlaying}
          isLooping
          useNativeControls={true}
          resizeMode={ResizeMode.CONTAIN}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Fermer" onPress={handleExitFullScreen} />
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
