import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoPreviewPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    const setupVideo = async () => {
      if (videoRef.current) {
        // Lecture automatique au chargement
        await videoRef.current.loadAsync({ uri: videoSource }, {}, false);
        await videoRef.current.playAsync();
      }
    };

    setupVideo();

    return () => {
      if (videoRef.current) {
        videoRef.current.unloadAsync();
        router.back();
      }
    };
  }, []);

  return (
    <View style={styles.contentContainer}>
      <Video
        ref={videoRef}
        style={styles.video}
        shouldPlay={isPlaying}
        isLooping
        useNativeControls={true}
        resizeMode={ResizeMode.COVER}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: 200,
  },
});
